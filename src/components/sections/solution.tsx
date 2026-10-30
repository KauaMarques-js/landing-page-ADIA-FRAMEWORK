import type { CSSProperties } from "react";

export function Solution() {
  return (
    <section
      id="solucao"
      className="section solution-section"
      aria-labelledby="solucao-titulo"
    >
      <div className="container solution-grid">
        <div className="solution-copy">
          <p className="eyebrow">02 / A proposta ADIA</p>
          <h2 id="solucao-titulo">
            A ajuda certa.
            <br />
            No momento certo.
            <br />
            <em>Por menos tempo.</em>
          </h2>
          <p>
            O ADIA Framework propõe ajustar o suporte da inteligência artificial
            às evidências de aprendizagem de cada estudante.
          </p>
          <p>
            Conforme a autonomia se desenvolve, a ajuda diminui. Se surgem
            dificuldades, o apoio pode voltar. Esse movimento é o{" "}
            <strong>desvanecimento adaptativo do suporte</strong>.
          </p>
          <a className="text-link" href="#como-funciona">
            Veja um exemplo na prática <span aria-hidden="true">↗</span>
          </a>
        </div>
        <figure className="fading-figure">
          <div className="figure-top">
            <span className="tiny-label">UMA JORNADA DE AUTONOMIA</span>
            <span className="figure-symbol" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="fading-columns" aria-hidden="true">
            <div>
              <span style={{ "--height": "90%" } as CSSProperties}></span>
              <b>01</b>
            </div>
            <div>
              <span style={{ "--height": "65%" } as CSSProperties}></span>
              <b>02</b>
            </div>
            <div>
              <span style={{ "--height": "38%" } as CSSProperties}></span>
              <b>03</b>
            </div>
            <div>
              <span style={{ "--height": "12%" } as CSSProperties}></span>
              <b>04</b>
            </div>
          </div>
          <div className="fading-labels">
            <span>Mais orientação</span>
            <span>Mais independência ↗</span>
          </div>
          <figcaption>
            Representação conceitual: o suporte diminui à medida que o estudante
            demonstra domínio. A progressão depende das necessidades
            individuais.
          </figcaption>
          <div className="figure-note">
            <span aria-hidden="true">✳</span>
            <p>
              O objetivo é ampliar a capacidade de pensar, resolver e transferir
              o conhecimento.
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
