import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/layout/site-header";
import { LearningDemo } from "@/components/interactive/learning-demo";
import { ContactForm } from "@/components/interactive/contact-form";
import { openEmail } from "@/lib/browser";

vi.mock("@/lib/browser", () => ({ openEmail: vi.fn() }));

describe("Navegação", () => {
  it("abre no celular, fecha com Escape e devolve o foco ao botão", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const menu = document.getElementById("menu")!;
    expect(menu.hidden).toBe(true);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(menu.hidden).toBe(false);
    await user.keyboard("{Escape}");
    expect(menu.hidden).toBe(true);
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "Abrir menu" }),
    );
  });

  it("fecha ao escolher um link e ao clicar fora", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const menu = document.getElementById("menu")!;
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByRole("link", { name: "A proposta" }));
    expect(menu.hidden).toBe(true);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(document.body);
    expect(menu.hidden).toBe(true);
  });

  it("mostra a navegação no desktop e reinicia o estado ao redimensionar", () => {
    let change: () => void = () => {};
    const media = {
      matches: false,
      addEventListener: (_: string, callback: () => void) => {
        change = callback;
      },
      removeEventListener: vi.fn(),
    };
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: () => media,
    });
    render(<SiteHeader />);
    act(() => {
      media.matches = true;
      change();
    });
    expect(document.getElementById("menu")!.hidden).toBe(false);
    expect(screen.queryByRole("button", { name: "Abrir menu" })).toBeNull();
    act(() => {
      media.matches = false;
      change();
    });
    expect(document.getElementById("menu")!.hidden).toBe(true);
  });
});

describe("Exemplo pedagógico", () => {
  it("preserva a troca de etapa por clique, setas, Home e End", async () => {
    const user = userEvent.setup();
    const { container } = render(<LearningDemo />);
    const steps = Array.from(
      container.querySelectorAll<HTMLButtonElement>("[data-step]"),
    );
    const expectStep = (index: number) => {
      expect(steps[index].getAttribute("aria-pressed")).toBe("true");
      expect(
        container.querySelectorAll(".demo-panel:not([hidden])").length,
      ).toBe(1);
      expect(document.getElementById("demo-panel-" + index)!.hidden).toBe(
        false,
      );
    };
    expectStep(0);
    await user.click(steps[2]);
    expectStep(2);
    await user.keyboard("{End}");
    expectStep(3);
    expect(document.activeElement).toBe(steps[3]);
    await user.keyboard("{ArrowRight}");
    expectStep(0);
    await user.keyboard("{ArrowLeft}");
    expectStep(3);
    await user.keyboard("{Home}");
    expectStep(0);
  });
});

describe("Formulário", () => {
  it("informa os erros e direciona o foco antes de preparar o e-mail", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /Preparar e-mail/ }));
    expect(screen.getByRole("status").textContent).toContain(
      "4 campos para corrigir",
    );
    expect(document.activeElement).toBe(screen.getByLabelText(/Seu nome/));
    expect(openEmail).not.toHaveBeenCalled();
    await user.type(screen.getByLabelText(/Seu nome/), "Ana");
    expect(screen.getByLabelText(/Seu nome/).getAttribute("aria-invalid")).toBe(
      "false",
    );
  });

  it("preserva o rascunho, a cópia e a alternativa manual sem enviar dados", async () => {
    window.ADIA_CONTACT_EMAIL = " equipe@example.org ";
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/Seu nome/), "Ana & João");
    await user.type(screen.getByLabelText(/Seu e-mail/), "ana@example.org");
    await user.type(
      screen.getByLabelText(/Escola ou instituição/),
      "Escola pública",
    );
    await user.type(
      screen.getByLabelText(/Como podemos ajudar/),
      "Olá!\nPesquisa + educação.",
    );
    await user.click(screen.getByRole("button", { name: /Preparar e-mail/ }));
    expect(openEmail).toHaveBeenCalledOnce();
    const uri = new URL(vi.mocked(openEmail).mock.calls[0][0]);
    expect(decodeURIComponent(uri.pathname)).toBe("equipe@example.org");
    expect(uri.searchParams.get("body")).toContain("Ana & João");
    const draft = screen.getByLabelText(
      "Mensagem preparada para copiar",
    ) as HTMLTextAreaElement;
    expect(draft.value).toContain("Pesquisa + educação.");
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    await user.click(screen.getByRole("button", { name: /Copiar mensagem/ }));
    expect(writeText).toHaveBeenCalledWith(draft.value);
    writeText.mockRejectedValueOnce(new Error("Sem permissão"));
    await user.click(screen.getByRole("button", { name: /Copiar mensagem/ }));
    expect(document.activeElement).toBe(draft);
    expect(draft.selectionEnd).toBe(draft.value.length);
    expect(screen.getByRole("status").textContent).toContain(
      "Selecionei a mensagem",
    );
    await user.type(screen.getByLabelText(/Como podemos ajudar/), " Revisada.");
    expect(document.getElementById("email-fallback")!.hidden).toBe(true);
  });
});
