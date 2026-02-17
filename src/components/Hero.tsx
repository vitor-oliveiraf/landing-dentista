export default function Hero() {
  return (
    <div className="container">
        <div className="hero-grid">
          <div className="hero-card reveal">
            <div className="hero-content">
              <div className="kicker">
                <span className="chip">
                  <span className="dot"></span> Atendimento humanizado e
                  tecnologia
                </span>
                <span className="chip">
                  📍 Clínica no Centro • Estacionamento
                </span>
              </div>

              <h2 className="headline">
                Sorriso <span className="gold">premium</span> com estética,
                conforto e segurança em cada detalhe.
              </h2>

              <p className="subhead">
                Avaliação completa + planejamento individual. Resultados
                naturais, protocolos modernos e um atendimento que respeita seu
                tempo. Ideal para quem busca estética dental, implantes e
                prevenção com alto padrão.
              </p>

              <div className="hero-cta">
                <a className="btn btn-primary" href="#contato">
                  Agendar avaliação agora
                </a>
                <a className="btn" href="#servicos">
                  Ver tratamentos
                </a>
              </div>

              <div className="trust-row" aria-label="Credibilidade">
                <span>
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l7 4v6c0 5-3 9-7 10C8 21 5 17 5 12V6l7-4Z" />
                  </svg>
                  Biossegurança e protocolos
                </span>
                <span>
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 12l2 2 6-6" />
                    <path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" />
                  </svg>
                  Planejamento detalhado
                </span>
                <span>
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v18" />
                    <path d="M7 7h10" />
                    <path d="M7 17h10" />
                  </svg>
                  Opções de pagamento
                </span>
              </div>

              <div className="divider"></div>

              <p className="fineprint">
                <strong style={{ color: "rgba(241, 210, 122, 0.92)" }}>
                  Transparência:
                </strong>
                cada caso é único. Resultados e prazos dependem da avaliação
                clínica e do plano indicado.
              </p>
            </div>
          </div>

          <div className="side">
            <div className="media-card reveal" aria-label="Imagem da clínica">
              <div className="media">
                <div
                  className="photo"
                  role="img"
                  aria-label="Foto da clínica odontológica"
                ></div>
                <div className="badge">
                  <span className="dot"></span>
                  <span>
                    <strong>+1.200</strong> pacientes atendidos
                  </span>
                </div>
              </div>
            </div>

            <div className="info-card reveal">
              <h3>O que você ganha na avaliação</h3>
              <p>
                • Análise completa • Plano por etapas • Estimativa de tempo e
                investimento • Próximos passos claros.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
