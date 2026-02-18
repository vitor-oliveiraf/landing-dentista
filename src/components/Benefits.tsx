import "./Benefits.css";

export default function Benefits() {
  return (
    <section id="beneficios">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Por que escolher</div>
          <h2 className="section-h2">
            Uma experiência de clínica premium — do primeiro contato ao
            pós-tratamento.
          </h2>
          <p className="section-sub">
            Pensado para quem valoriza resultado, previsibilidade e conforto.
            Comunicação clara, acompanhamento e estética natural.
          </p>
        </div>

        <div className="grid-3">
          <div className="card reveal">
            <h3>Planejamento e previsibilidade</h3>
            <p>
              Você entende o que será feito, por quê, em quanto tempo e como
              manter o resultado.
            </p>
          </div>
          <div className="card reveal">
            <h3>Estética natural (sem exageros)</h3>
            <p>
              Foco em harmonia facial e um sorriso que combina com você — com
              técnica e bom gosto.
            </p>
          </div>
          <div className="card reveal">
            <h3>Conforto e segurança</h3>
            <p>
              Ambiente premium, protocolos de biossegurança e tecnologias que
              reduzem desconforto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
