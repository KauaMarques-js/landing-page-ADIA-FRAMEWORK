"use client";

import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const {
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
  } = useContactForm();
  return (
    <form id="contact-form" className="form" noValidate onSubmit={handleSubmit}>
      <h3>Conheça o ADIA de perto.</h3>
      <p className="form-intro">
        Preencha para preparar sua mensagem. Os campos marcados com * são
        obrigatórios.
      </p>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nome">Seu nome *</label>
          <input
            id="nome"
            name="nome"
            aria-invalid={isInvalid("nome")}
            onBlur={handleBlur}
            onChange={handleInput}
            type="text"
            autoComplete="name"
            maxLength={120}
            required
            aria-describedby="nome-erro"
          />
          <p className="error" id="nome-erro">
            {errors.nome}
          </p>
        </div>
        <div className="field">
          <label htmlFor="email">Seu e-mail *</label>
          <input
            id="email"
            name="email"
            aria-invalid={isInvalid("email")}
            onBlur={handleBlur}
            onChange={handleInput}
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-describedby="email-erro"
          />
          <p className="error" id="email-erro">
            {errors.email}
          </p>
        </div>
      </div>
      <div className="field">
        <label htmlFor="instituicao">Escola ou instituição *</label>
        <input
          id="instituicao"
          name="instituicao"
          aria-invalid={isInvalid("instituicao")}
          onBlur={handleBlur}
          onChange={handleInput}
          type="text"
          autoComplete="organization"
          maxLength={180}
          required
          aria-describedby="instituicao-erro"
        />
        <p className="error" id="instituicao-erro">
          {errors.instituicao}
        </p>
      </div>
      <div className="field">
        <label htmlFor="mensagem">Como podemos ajudar? *</label>
        <textarea
          id="mensagem"
          name="mensagem"
          aria-invalid={isInvalid("mensagem")}
          onBlur={handleBlur}
          onChange={handleInput}
          rows={4}
          maxLength={3000}
          required
          aria-describedby="mensagem-erro"
          placeholder="Conte sobre sua escola, pesquisa ou interesse no projeto."
        ></textarea>
        <p className="error" id="mensagem-erro">
          {errors.mensagem}
        </p>
      </div>
      <p className="form-explanation" id="form-explanation">
        O botão abre seu aplicativo de e-mail. Revise e envie a mensagem por lá.
        Os dados não são armazenados nesta página.
      </p>
      <button
        className="btn btn-dark"
        id="form-submit"
        type="submit"
        disabled={!ready}
        aria-describedby="form-explanation"
      >
        Preparar e-mail <span aria-hidden="true">↗</span>
      </button>
      <p
        id="form-status"
        className={statusError ? "form-status is-error" : "form-status"}
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
      <div id="email-fallback" className="email-fallback" hidden={!draft}>
        <label htmlFor="email-draft">Mensagem preparada para copiar</label>
        <textarea
          id="email-draft"
          rows={7}
          readOnly
          ref={draftRef}
          value={draft?.text ?? ""}
        ></textarea>
        <button
          className="text-link"
          id="copy-message"
          type="button"
          onClick={copyMessage}
        >
          Copiar mensagem <span aria-hidden="true">↗</span>
        </button>
        <a
          className="text-link"
          data-contact-link=""
          href={"mailto:" + encodeURIComponent(email)}
        >
          Abrir e-mail diretamente ↗
        </a>
      </div>
      <noscript>
        <p>
          Para entrar em contato, escreva diretamente para{" "}
          <a href={"mailto:" + encodeURIComponent(email)}>{email}</a>.
        </p>
      </noscript>
    </form>
  );
}
