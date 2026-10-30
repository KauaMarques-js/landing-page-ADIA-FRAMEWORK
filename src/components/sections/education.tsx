export function Education() {
  return (
    <section
      id="educacao"
      className="section education-section"
      aria-labelledby="educacao-titulo"
    >
      <div className="container education-grid">
        <figure className="education-photo">
          <img
            src="/img/escolas/tecnologia-mt.jpg"
            width={1000}
            height={681}
            loading="lazy"
            decoding="async"
            alt="Estudante da rede estadual de Mato Grosso utilizando um Chromebook, com colegas ao fundo."
          />
          <figcaption>
            Rede estadual de Mato Grosso · Imagem publicada por Seduc-MT /{" "}
            <a
              href="https://www.consed.org.br/noticia/seduc-vai-reforcar-uso-da-tecnologia-em-sala-de-aula-durante-semana-pedagogica"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consed <span className="sr-only">(abre em nova aba)</span>↗
            </a>
          </figcaption>
        </figure>
        <div className="education-copy">
          <p className="eyebrow">04 / Conexão com a escola pública</p>
          <h2 id="educacao-titulo">
            Tecnologia com sentido.
            <br />
            <em>Educação com gente.</em>
          </h2>
          <p>
            As salas de aula de Mato Grosso dão contexto a uma pergunta que
            orienta o ADIA: como usar a tecnologia para ampliar o protagonismo
            de quem aprende?
          </p>
          <p>
            A proposta mantém a mediação docente e considera o ritmo do
            estudante. Uma aplicação em escola pública precisa ser planejada com
            a comunidade escolar, considerando acesso, infraestrutura e
            objetivos pedagógicos.
          </p>
          <ul className="editorial-list">
            <li>
              <span aria-hidden="true">↗</span> Professor como mediador da
              aprendizagem
            </li>
            <li>
              <span aria-hidden="true">↗</span> Estudante como autor do próprio
              raciocínio
            </li>
            <li>
              <span aria-hidden="true">↗</span> Tecnologia alinhada ao contexto
              da escola
            </li>
          </ul>
          <p className="photo-context">
            Fotografias de contexto educacional. As escolas e pessoas retratadas
            não são apresentadas como participantes de pesquisas, clientes ou
            parceiras do ADIA.
          </p>
        </div>
      </div>
    </section>
  );
}
