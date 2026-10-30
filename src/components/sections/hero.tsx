export function Hero() {
  return (
    <section id="topo" className="hero" aria-labelledby="hero-titulo">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">
              <span className="status-dot" aria-hidden="true"></span> Tecnologia
              a serviço de quem aprende
            </p>
            <h1 id="hero-titulo">
              Inteligência
              <br />
              artificial.
              <br />
              <em>
                Autonomia
                <br />
                humana.
              </em>
            </h1>
            <p className="hero-lead">
              Apoiar cada descoberta. Desenvolver quem aprende. O ADIA adapta a
              ajuda da IA para que o estudante avance com o próprio raciocínio.
            </p>
            <div className="btn-row">
              <a className="btn btn-green" href="#contato">
                Conhecer o ADIA <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link light-link" href="#como-funciona">
                Explore o funcionamento <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-footnote">
              Suporte adaptativo. Professor presente. Estudante protagonista.
            </p>
          </div>
          <figure className="hero-visual">
            <div className="hero-photo">
              <img
                src="/img/escolas/alice-fontes.jpg"
                width={1200}
                height={843}
                alt="Estudantes da Escola Estadual Alice Fontes, em Cuiabá, utilizando computadores em sala de aula."
                fetchPriority="high"
              />
              <span className="photo-location">
                <span aria-hidden="true">◉</span> Cuiabá · Mato Grosso
              </span>
              <div className="photo-message">
                <span className="tiny-label">O FUTURO COMEÇA COM</span>
                <strong>quem aprende.</strong>
                <span className="photo-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
            <figcaption>
              Escola Estadual Alice Fontes · Imagem: Seduc-MT /{" "}
              <a
                href="https://www.consed.org.br/noticia/ganhamos-uma-escola-incrivel-e-que-vai-nos-abrir-muitas-oportunidades-afirma-estudante-da-escola-estadual-alice-fontes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consed <span className="sr-only">(abre em nova aba)</span>↗
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="hero-bottom">
          <p>APRENDER É IR ALÉM DA RESPOSTA.</p>
          <a href="#problema">
            Entenda o desafio <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
