export function Technology() {
  return (
    <section
      id="tecnologia"
      className="section technology-section"
      aria-labelledby="tecnologia-titulo"
    >
      <div className="container technology-grid">
        <div>
          <p className="eyebrow">07 / Por trás da experiência</p>
          <h2 id="tecnologia-titulo">
            A pedagogia orienta.
            <br />
            <span className="muted">A tecnologia apoia.</span>
          </h2>
          <p>
            Arquitetura descrita para o protótipo: modelos locais, recuperação
            de conteúdo de referência e regras de interação para orientar a
            ajuda.
          </p>
          <details className="tech-details">
            <summary>
              Explorar tecnologias do protótipo{" "}
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              O material do projeto descreve FastAPI, SQLite, React, TypeScript,
              modelos de linguagem locais e RAG com embeddings bge-m3. Essa
              arquitetura se refere ao protótipo educacional; esta página é uma
              apresentação institucional.
            </p>
          </details>
        </div>
        <ol className="architecture">
          <li>
            <span>01</span>
            <div>
              <h3>Experiência do estudante</h3>
              <p>Desafios, tentativas e reflexão.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Motor adaptativo ADIA</h3>
              <p>Regulação da intensidade do suporte.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Modelos, contexto e salvaguardas</h3>
              <p>Orientação com conteúdo de referência.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Acompanhamento da aprendizagem</h3>
              <p>Autonomia, transferência e retenção.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
