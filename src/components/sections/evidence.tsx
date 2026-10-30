import type { CSSProperties } from "react";

export function Evidence() {
  return (
    <section
      id="resultados"
      className="section evidence-section"
      aria-labelledby="resultados-titulo"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow light">05 / Evidências e transparência</p>
            <h2 id="resultados-titulo">
              O que importa medir:
              <br />
              <em>o que permanece.</em>
            </h2>
          </div>
          <div className="heading-copy">
            <p>
              Autonomia, transferência e retenção orientam a avaliação proposta
              pelo ADIA.
            </p>
            <p className="evidence-source">
              Os números abaixo foram informados no material original do
              projeto. O artigo, os dados e o protocolo do experimento ainda não
              estão disponíveis nesta página para verificação.
            </p>
          </div>
        </div>
        <p className="data-label">
          <span aria-hidden="true">◌</span> Dados informados do protótipo ·
          validação documental pendente
        </p>
        <div className="metrics">
          <div>
            <span className="metric-value">
              84<span>%</span>
            </span>
            <h3>Acerto independente</h3>
            <p>Resolução de atividades sem assistência.</p>
          </div>
          <div>
            <span className="metric-value">
              81<span>%</span>
            </span>
            <h3>Transferência</h3>
            <p>Aplicação em problemas STEAM.</p>
          </div>
          <div>
            <span className="metric-value">
              88<span>%</span>
            </span>
            <h3>Retenção após 7 dias</h3>
            <p>Desempenho em avaliação posterior.</p>
          </div>
        </div>
        <div className="results-detail">
          <div>
            <h3>Acerto independente por condição</h3>
            <p>Comparação descritiva do material do projeto.</p>
          </div>
          <ul className="comparison-bars">
            <li>
              <div>
                <span>Suporte constante</span>
                <strong>48%</strong>
              </div>
              <span className="bar" aria-hidden="true">
                <i style={{ "--value": "48%" } as CSSProperties}></i>
              </span>
            </li>
            <li className="highlight-bar">
              <div>
                <span>ADIA adaptativo</span>
                <strong>84%</strong>
              </div>
              <span className="bar" aria-hidden="true">
                <i style={{ "--value": "84%" } as CSSProperties}></i>
              </span>
            </li>
            <li>
              <div>
                <span>Redução por regra fixa</span>
                <strong>65%</strong>
              </div>
              <span className="bar" aria-hidden="true">
                <i style={{ "--value": "65%" } as CSSProperties}></i>
              </span>
            </li>
          </ul>
        </div>
        <details className="data-details">
          <summary>
            Consultar dados completos e limites da evidência{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <div className="details-body">
            <p>
              O material original descreve 30 estudantes por condição. Sem
              acesso ao protocolo, à análise estatística e aos dados, os valores
              devem ser lidos como informações do projeto, sem conclusão de
              eficácia ou garantia de desempenho.
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="Resultados informados; tabela com rolagem horizontal"
            >
              <table>
                <caption>
                  Resultados descritos no material original do ADIA
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Indicador</th>
                    <th scope="col">Suporte constante</th>
                    <th scope="col">ADIA adaptativo</th>
                    <th scope="col">Redução fixa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Acerto independente</th>
                    <td>48%</td>
                    <td>84%</td>
                    <td>65%</td>
                  </tr>
                  <tr>
                    <th scope="row">Transferência STEAM</th>
                    <td>42%</td>
                    <td>81%</td>
                    <td>58%</td>
                  </tr>
                  <tr>
                    <th scope="row">Índice de independência cognitiva</th>
                    <td>0,52</td>
                    <td>0,89</td>
                    <td>0,68</td>
                  </tr>
                  <tr>
                    <th scope="row">Viés metacognitivo</th>
                    <td>+0,38</td>
                    <td>+0,05</td>
                    <td>+0,18</td>
                  </tr>
                  <tr>
                    <th scope="row">Dose de suporte solicitada</th>
                    <td>88%</td>
                    <td>42%</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <th scope="row">Retenção em 7 dias</th>
                    <td>55%</td>
                    <td>88%</td>
                    <td>62%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              STEAM integra ciência, tecnologia, engenharia, artes e matemática.
              As definições operacionais dos índices e as condições de coleta
              precisam acompanhar a publicação do estudo.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
