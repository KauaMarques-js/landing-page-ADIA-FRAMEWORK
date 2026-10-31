import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it, vi } from "vitest";
import { ThemeToggle } from "@/components/interactive/theme-toggle";

afterEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

it("alterna os temas, salva a escolha e a restaura ao montar", async () => {
  const user = userEvent.setup();
  const view = render(<ThemeToggle />);
  await user.click(screen.getByRole("button", { name: "Ativar modo escuro" }));
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(localStorage.getItem("adia-theme")).toBe("dark");
  view.unmount();
  render(<ThemeToggle />);
  await user.click(screen.getByRole("button", { name: "Ativar modo claro" }));
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(localStorage.getItem("adia-theme")).toBe("light");
});

it("usa a preferência escura do sistema sem uma escolha salva", () => {
  Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }) });
  render(<ThemeToggle />);
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(screen.getByRole("button", { name: "Ativar modo claro" })).toBeTruthy();
});
