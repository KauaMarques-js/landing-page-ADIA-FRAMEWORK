"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

export function LearningDemo() {
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => setReady(true), []);
  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % 4;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + 3) % 4;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = 3;
    if (next === undefined) return;
    event.preventDefault();
    setStep(next);
    buttons.current[next]?.focus();
  };
  return (
    <div className="demo">
      <div className="demo-sidebar">
        <span className="tiny-label">EXEMPLO DIDÁTICO · MATEMÁTICA</span>
        <h3>Uma horta na escola.</h3>
        <p>
          Uma turma quer planejar um canteiro retangular de 6 m por 4 m. Como
          descobrir a área disponível para o plantio?
        </p>
        <div
          className="demo-tabs"
          aria-label="Etapas do exemplo"
          hidden={!ready}
        >
          <button
            type="button"
            className="demo-step"
            data-step="0"
            aria-pressed={step === 0}
            ref={(element) => {
              buttons.current[0] = element;
            }}
            onClick={() => setStep(0)}
            onKeyDown={(event) => handleKeyDown(event, 0)}
            aria-controls="demo-panel-0"
          >
            <span>01</span> Orientar <span aria-hidden="true">↗</span>
          </button>
          <button
            type="button"
            className="demo-step"
            data-step="1"
            aria-pressed={step === 1}
            ref={(element) => {
              buttons.current[1] = element;
            }}
            onClick={() => setStep(1)}
            onKeyDown={(event) => handleKeyDown(event, 1)}
            aria-controls="demo-panel-1"
          >
            <span>02</span> Dar uma pista <span aria-hidden="true">↗</span>
          </button>
          <button
            type="button"
            className="demo-step"
            data-step="2"
            aria-pressed={step === 2}
            ref={(element) => {
              buttons.current[2] = element;
            }}
            onClick={() => setStep(2)}
            onKeyDown={(event) => handleKeyDown(event, 2)}
            aria-controls="demo-panel-2"
          >
            <span>03</span> Incentivar autonomia{" "}
            <span aria-hidden="true">↗</span>
          </button>
          <button
            type="button"
            className="demo-step"
            data-step="3"
            aria-pressed={step === 3}
            ref={(element) => {
              buttons.current[3] = element;
            }}
            onClick={() => setStep(3)}
            onKeyDown={(event) => handleKeyDown(event, 3)}
            aria-controls="demo-panel-3"
          >
            <span>04</span> Transferir <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <div className="demo-content" aria-live="polite" aria-atomic="true">
        <article
          id="demo-panel-0"
          className="demo-panel"
          hidden={ready && step !== 0}
        >
          <div className="demo-panel-top">
            <h3 className="demo-badge">Orientação inicial</h3>
            <span className="support-label">Apoio alto</span>
          </div>
          <p className="student-message">
            <span>ESTUDANTE</span>“Não sei por onde começar.”
          </p>
          <div className="tutor-message">
            <span className="tutor-avatar" aria-hidden="true">
              a.
            </span>
            <div>
              <span className="tiny-label">APOIO DA IA · EXEMPLO</span>
              <p>
                Pense no canteiro como uma organização de quadrados de 1 m². Se
                uma fileira tem 6 quadrados e há 4 fileiras, que operação ajuda
                a contar todos eles?
              </p>
            </div>
          </div>
          <p className="pedagogy-note">
            <strong>Intenção pedagógica</strong>Conectar a medida de área a uma
            representação que o estudante possa compreender.
          </p>
        </article>
        <article
          id="demo-panel-1"
          className="demo-panel"
          hidden={ready && step !== 1}
        >
          <div className="demo-panel-top">
            <h3 className="demo-badge">Pista gradual</h3>
            <span className="support-label">Apoio moderado</span>
          </div>
          <p className="student-message">
            <span>ESTUDANTE</span>“Acho que preciso multiplicar as medidas.”
          </p>
          <div className="tutor-message">
            <span className="tutor-avatar" aria-hidden="true">
              a.
            </span>
            <div>
              <span className="tiny-label">APOIO DA IA · EXEMPLO</span>
              <p>
                Explique como essa multiplicação representa as fileiras do
                canteiro. Depois, faça o cálculo e indique a unidade de medida.
              </p>
            </div>
          </div>
          <p className="pedagogy-note">
            <strong>Intenção pedagógica</strong>Pedir uma justificativa e uma
            tentativa própria antes de oferecer mais orientação.
          </p>
        </article>
        <article
          id="demo-panel-2"
          className="demo-panel"
          hidden={ready && step !== 2}
        >
          <div className="demo-panel-top">
            <h3 className="demo-badge">Resolução independente</h3>
            <span className="support-label">Apoio reduzido</span>
          </div>
          <p className="student-message">
            <span>ESTUDANTE</span>“6 × 4 = 24 m², porque são quatro fileiras de
            seis.”
          </p>
          <div className="tutor-message">
            <span className="tutor-avatar" aria-hidden="true">
              a.
            </span>
            <div>
              <span className="tiny-label">APOIO DA IA · EXEMPLO</span>
              <p>
                Agora tente um canteiro de 8 m por 3 m sem pistas. Mostre seu
                raciocínio e confira se a unidade escolhida representa área.
              </p>
            </div>
          </div>
          <p className="pedagogy-note">
            <strong>Intenção pedagógica</strong>Observar se o estudante consegue
            aplicar a estratégia com menos assistência.
          </p>
        </article>
        <article
          id="demo-panel-3"
          className="demo-panel"
          hidden={ready && step !== 3}
        >
          <div className="demo-panel-top">
            <h3 className="demo-badge">Aplicação em novo contexto</h3>
            <span className="support-label">Sem pista de resolução</span>
          </div>
          <p className="student-message">
            <span>NOVO DESAFIO</span>“Como usar esse conhecimento em outra
            situação?”
          </p>
          <div className="tutor-message">
            <span className="tutor-avatar" aria-hidden="true">
              a.
            </span>
            <div>
              <span className="tiny-label">APOIO DA IA · EXEMPLO</span>
              <p>
                A biblioteca precisa de um tapete de 5 m por 4 m. Cada placa de
                tapete cobre 1 m². Quantas placas serão necessárias? Resolva e
                explique sua decisão.
              </p>
            </div>
          </div>
          <p className="pedagogy-note">
            <strong>Intenção pedagógica</strong>Investigar a transferência para
            uma situação próxima. Avaliações mais amplas exigem desafios de
            diferentes tipos e dificuldades.
          </p>
        </article>
      </div>
      <div className="demo-disclaimer">
        Exemplo com roteiro fixo para explicar a proposta. Não é uma sessão de
        IA nem uma avaliação de aprendizagem.
      </div>
    </div>
  );
}
