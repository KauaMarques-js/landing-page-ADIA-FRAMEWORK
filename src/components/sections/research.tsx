export function Research() {
  return (
    <section
      id="pesquisa"
      className="section research-section"
      aria-labelledby="pesquisa-titulo"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">06 / Fundamentos científicos</p>
            <h2 id="pesquisa-titulo">
              Uma proposta que
              <br />
              dialoga com a pesquisa.
            </h2>
          </div>
          <p className="heading-copy">
            A literatura ajuda a formular as perguntas do ADIA. Esses estudos
            discutem apoio à aprendizagem; não constituem validação do
            framework.
          </p>
        </div>
        <div className="research-list">
          <article>
            <span className="reference-number">[01]</span>
            <div>
              <p className="reference-meta">BASTANI ET AL. · 2025 · PNAS</p>
              <h3>IA generativa e a preservação da aprendizagem</h3>
              <p>
                O estudo distingue melhora durante a prática de desempenho
                posterior sem IA e investiga salvaguardas pedagógicas no desenho
                de tutores.
              </p>
              <p className="reference-title" lang="en">
                Generative AI without guardrails can harm learning: Evidence
                from high school mathematics.
              </p>
              <a
                className="text-link"
                href="https://doi.org/10.1073/pnas.2422633122"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler artigo · DOI <span aria-hidden="true">↗</span>
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>
          </article>
          <article>
            <span className="reference-number">[02]</span>
            <div>
              <p className="reference-meta">
                KOEDINGER &amp; ALEVEN · 2007 · EDUCATIONAL PSYCHOLOGY REVIEW
              </p>
              <h3>O dilema de quando oferecer ajuda</h3>
              <p>
                Os autores examinam como equilibrar orientação e oportunidade de
                resolução em tutores cognitivos, uma questão central para o
                suporte adaptativo.
              </p>
              <p className="reference-title" lang="en">
                Exploring the Assistance Dilemma in Experiments with Cognitive
                Tutors.
              </p>
              <a
                className="text-link"
                href="https://doi.org/10.1007/s10648-007-9049-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler artigo · DOI <span aria-hidden="true">↗</span>
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>
          </article>
        </div>
        <div className="research-note">
          <span aria-hidden="true">↳</span>
          <p>
            <strong>Conhecer a proposta também é conhecer seus limites.</strong>{" "}
            A descrição do estudo ADIA, seu método e suas análises deverão
            acompanhar a divulgação científica dos resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
