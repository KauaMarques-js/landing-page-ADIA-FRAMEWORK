export function Problem() {
  return (
    <section
      id="problema"
      className="section"
      aria-labelledby="problema-titulo"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">01 / O ponto de partida</p>
            <h2 id="problema-titulo">
              Acertar com ajuda.
              <br />
              <span className="muted">Aprender de verdade.</span>
            </h2>
          </div>
          <div className="heading-copy">
            <p>
              Uma resposta correta conta só uma parte da história. O que
              acontece quando o estudante precisa resolver sozinho?
            </p>
            <p>
              O ADIA parte dessa pergunta para distinguir três dimensões da
              aprendizagem.
            </p>
          </div>
        </div>
        <ol className="learning-dimensions">
          <li>
            <span className="outline-number" aria-hidden="true">
              01
            </span>
            <h3>Resolver com apoio</h3>
            <p>
              O estudante realiza a atividade com pistas, perguntas e
              orientações da IA.
            </p>
            <span className="dimension-tag">Desempenho assistido</span>
          </li>
          <li>
            <span className="outline-number" aria-hidden="true">
              02
            </span>
            <h3>Caminhar sozinho</h3>
            <p>
              Ele explica seu raciocínio e resolve o desafio sem depender da
              ferramenta.
            </p>
            <span className="dimension-tag">Desempenho independente</span>
          </li>
          <li>
            <span className="outline-number" aria-hidden="true">
              03
            </span>
            <h3>Levar o que aprendeu</h3>
            <p>
              Ele aplica o conhecimento em uma situação nova, além do exercício
              original.
            </p>
            <span className="dimension-tag">Transferência de conhecimento</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
