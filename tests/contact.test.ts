import { describe, expect, it } from "vitest";
import { prepareContactMessage, validateContactField } from "@/lib/contact";

describe("Regras de contato preservadas", () => {
  it("rejeita campos vazios, espaços e e-mail inválido", () => {
    expect(validateContactField("nome", "   ")).toBe("Informe seu nome.");
    expect(validateContactField("email", "ana@escola")).toBeDefined();
    expect(
      validateContactField("email", "ana@escola.org", false),
    ).toBeDefined();
    expect(validateContactField("email", "ana@escola.org")).toBeUndefined();
  });

  it("prepara mailto com acentos, quebras de linha e caracteres reservados", () => {
    const message = prepareContactMessage(
      {
        nome: " Ana & João ",
        email: " ana@example.org ",
        instituicao: " Escola pública ",
        mensagem: "Olá!\nPesquisa + educação & tecnologia?",
      },
      "equipe@example.org",
    );
    const uri = new URL(message.url);
    expect(decodeURIComponent(uri.pathname)).toBe("equipe@example.org");
    expect(uri.searchParams.get("subject")).toBe("Conhecer o ADIA Framework");
    expect(uri.searchParams.get("body")).toBe(
      "Nome: Ana & João\r\nE-mail: ana@example.org\r\nInstituição: Escola pública\r\n\r\nOlá!\nPesquisa + educação & tecnologia?",
    );
    expect(message.text).toContain("Para: equipe@example.org");
  });
});
