import "./FAQ.css";

export default function FAQ() {
  return (
    <section id="duvidas">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Dúvidas</div>
          <h2 className="section-h2">Perguntas frequentes</h2>
          <p className="section-sub">
            Respostas diretas para facilitar sua decisão.
          </p>
        </div>

        <div className="faq">
          <details className="reveal">
            <summary>Quanto tempo dura a avaliação?</summary>
            <p>
              Em geral, 30 a 60 minutos, dependendo do caso. Você sai com um
              plano claro de tratamento.
            </p>
          </details>
          <details className="reveal">
            <summary>O resultado é imediato?</summary>
            <p>
              Alguns procedimentos têm efeito rápido, outros exigem etapas. Tudo
              é alinhado no planejamento.
            </p>
          </details>
          <details className="reveal">
            <summary>Tem formas de pagamento?</summary>
            <p>
              Sim. Você pode organizar por etapas e escolher a melhor opção após
              a avaliação.
            </p>
          </details>
          <details className="reveal">
            <summary>É possível ver antes e depois reais?</summary>
            <p>
              Sim, quando há autorização do paciente. Na clínica, mostramos
              exemplos semelhantes ao seu caso.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
