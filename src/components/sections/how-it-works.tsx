import { LearningDemo } from "@/components/interactive/learning-demo";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section"
      aria-labelledby="como-titulo"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">03 / Da ideia à experiência</p>
            <h2 id="como-titulo">
              Menos respostas prontas.
              <br />
              <span className="muted">Mais espaço para pensar.</span>
            </h2>
          </div>
          <p className="heading-copy">
            Explore uma sequência ilustrativa de apoio à aprendizagem. Cada
            etapa mostra uma forma diferente de orientar o estudante.
          </p>
        </div>
        <LearningDemo />
        <ol className="process">
          <li>
            <span>01</span>
            <strong>Diagnosticar</strong>
            <p>Entender o ponto de partida.</p>
          </li>
          <li>
            <span>02</span>
            <strong>Orientar</strong>
            <p>Oferecer apoio adequado.</p>
          </li>
          <li>
            <span>03</span>
            <strong>Observar</strong>
            <p>Analisar tentativas e estratégias.</p>
          </li>
          <li>
            <span>04</span>
            <strong>Regular</strong>
            <p>Ajustar a intensidade da ajuda.</p>
          </li>
          <li>
            <span>05</span>
            <strong>Desvanecer</strong>
            <p>Reduzir o apoio gradualmente.</p>
          </li>
          <li>
            <span>06</span>
            <strong>Validar</strong>
            <p>Verificar autonomia e retenção.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
