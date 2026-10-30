const DEFAULT_CONTACT_EMAIL = "kaua.marquesal@gmail.com";
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

export type ContactFieldName = "nome" | "email" | "instituicao" | "mensagem";
export type ContactValues = Record<ContactFieldName, string>;
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export const CONTACT_FIELDS: readonly ContactFieldName[] = [
  "nome",
  "email",
  "instituicao",
  "mensagem",
];
const FIELD_MESSAGES: Record<ContactFieldName, string> = {
  nome: "Informe seu nome.",
  email: "Informe um e-mail válido, como nome@escola.com.br.",
  instituicao: "Informe sua escola ou instituição.",
  mensagem: "Conte brevemente como podemos ajudar.",
};

export function validateContactField(
  name: ContactFieldName,
  value: string,
  nativeValid = true,
): string | undefined {
  const trimmed = value.trim();
  const valid =
    trimmed.length > 0 &&
    (name !== "email" ||
      (nativeValid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)));
  return valid ? undefined : FIELD_MESSAGES[name];
}

export function prepareContactMessage(values: ContactValues, email: string) {
  const subject = "Conhecer o ADIA Framework";
  const body = [
    "Nome: " + values.nome.trim(),
    "E-mail: " + values.email.trim(),
    "Instituição: " + values.instituicao.trim(),
    "",
    values.mensagem.trim(),
  ].join("\r\n");
  return {
    text: "Para: " + email + "\r\nAssunto: " + subject + "\r\n\r\n" + body,
    url:
      "mailto:" +
      encodeURIComponent(email) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body),
  };
}
