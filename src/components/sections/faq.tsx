export function Faq() {
  return (
    <section
      id="duvidas"
      className="section faq-section"
      aria-labelledby="duvidas-titulo"
    >
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Antes de começar</p>
          <h2 id="duvidas-titulo">
            Boas perguntas.
            <br />
            Respostas claras.
          </h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              O ADIA substitui o professor?<span aria-hidden="true">+</span>
            </summary>
            <p>
              A proposta mantém o professor como mediador. A IA oferece apoio à
              atividade, enquanto as decisões pedagógicas e o acompanhamento
              humano continuam essenciais.
            </p>
          </details>
          <details>
            <summary>
              Como a ajuda diminui?<span aria-hidden="true">+</span>
            </summary>
            <p>
              O suporte é ajustado conforme as evidências de desempenho e as
              necessidades do estudante. A progressão considera tentativas e
              raciocínio, com oportunidade de retomar a orientação quando
              necessário.
            </p>
          </details>
          <details>
            <summary>
              Já posso usar o ADIA na minha escola?
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Esta página apresenta a proposta e informações de um protótipo.
              Entre em contato para conhecer seu estágio atual e discutir
              requisitos pedagógicos e técnicos de uma possível aplicação.
            </p>
          </details>
          <details>
            <summary>
              As fotografias são de escolas que usam o ADIA?
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              As imagens representam o contexto da educação pública em Mato
              Grosso e foram publicadas pelo Consed em matérias da Seduc-MT.
              Elas não indicam adoção, parceria ou participação em estudos do
              ADIA. As fontes estão nas legendas.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
