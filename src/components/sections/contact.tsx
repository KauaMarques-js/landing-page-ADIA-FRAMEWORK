import { ContactForm } from "@/components/interactive/contact-form";
import { ContactEmail } from "@/components/interactive/contact-email";

export function Contact() {
  return (
    <section
      id="contato"
      className="section contact-section"
      aria-labelledby="contato-titulo"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow light">Vamos construir essa conversa</p>
          <h2 id="contato-titulo">
            O próximo passo
            <br />
            começa com
            <br />
            <em>uma boa pergunta.</em>
          </h2>
          <p>
            Você é educador, gestor ou pesquisador? Conte sobre seu contexto e
            conheça a proposta do ADIA.
          </p>
          <ContactEmail />
          <span className="contact-symbol" aria-hidden="true">
            ✳
          </span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
