"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { useContactEmail } from "@/hooks/use-contact-email";
import {
  CONTACT_FIELDS,
  prepareContactMessage,
  validateContactField,
  type ContactErrors,
  type ContactFieldName,
  type ContactValues,
} from "@/lib/contact";
import { openEmail } from "@/lib/browser";

type ContactInput = HTMLInputElement | HTMLTextAreaElement;

export function useContactForm() {
  const email = useContactEmail();
  const [ready, setReady] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);
  const [draft, setDraft] = useState<ReturnType<
    typeof prepareContactMessage
  > | null>(null);
  const draftRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => setReady(true), []);

  const validate = (field: ContactInput) =>
    validateContactField(
      field.name as ContactFieldName,
      field.value,
      field.validity.valid,
    );
  const handleBlur = (event: FocusEvent<ContactInput>) => {
    const field = event.currentTarget;
    const name = field.name as ContactFieldName;
    if (field.value || errors[name])
      setErrors((previous) => ({ ...previous, [name]: validate(field) }));
  };
  const handleInput = (event: ChangeEvent<ContactInput>) => {
    const field = event.currentTarget;
    const name = field.name as ContactFieldName;
    if (errors[name])
      setErrors((previous) => ({ ...previous, [name]: validate(field) }));
    setDraft(null);
    setStatus("");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusError(false);
    const form = event.currentTarget;
    const nextErrors: ContactErrors = {};
    const values = {} as ContactValues;
    const invalid: ContactInput[] = [];
    for (const name of CONTACT_FIELDS) {
      const field = form.querySelector<ContactInput>(`[name="${name}"]`)!;
      values[name] = field.value;
      nextErrors[name] = validate(field);
      if (nextErrors[name]) invalid.push(field);
    }
    setErrors(nextErrors);
    if (invalid.length) {
      setDraft(null);
      setStatus(
        "Revise os campos indicados. Há " +
          invalid.length +
          (invalid.length === 1
            ? " campo para corrigir."
            : " campos para corrigir."),
      );
      setStatusError(true);
      invalid[0].focus();
      return;
    }
    const message = prepareContactMessage(values, email);
    setDraft(message);
    setStatus(
      "Mensagem preparada. Continue no aplicativo de e-mail para concluir o envio. Se ele não abrir, copie a mensagem abaixo e envie para " +
        email +
        ".",
    );
    openEmail(message.url);
  };
  const copyMessage = async () => {
    if (!draft) return;
    try {
      if (!navigator.clipboard)
        throw new Error("Área de transferência indisponível");
      await navigator.clipboard.writeText(draftRef.current?.value ?? draft.text);
      setStatusError(false);
      setStatus(
        "Mensagem copiada. Cole no seu e-mail e envie para " + email + ".",
      );
    } catch {
      draftRef.current?.focus();
      draftRef.current?.select();
      setStatus(
        "Selecionei a mensagem. Use o comando Copiar do seu dispositivo e cole no seu e-mail.",
      );
    }
  };
  const isInvalid = (name: ContactFieldName) =>
    name in errors ? Boolean(errors[name]) : undefined;

  return {
    email,
    ready,
    errors,
    status,
    statusError,
    draft,
    draftRef,
    handleBlur,
    handleInput,
    handleSubmit,
    copyMessage,
    isInvalid,
  };
}
