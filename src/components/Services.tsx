import "./Services.css";

export default function Services() {
  return (
    <section id="servicos">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Tratamentos</div>
          <h2 className="section-h2">
            Soluções completas para estética, função e saúde.
          </h2>
          <p className="section-sub">
            Selecione o que faz sentido para você — e na avaliação definimos o
            melhor caminho.
          </p>
        </div>

        <div className="services">
          <div className="service reveal">
            <div className="mark">✨</div>
            <div>
              <strong>Lentes de contato / Facetas</strong>
              <span>
                Estética avançada com naturalidade, correções de forma, cor e
                pequenas assimetrias.
              </span>
            </div>
          </div>

          <div className="service reveal">
            <div className="mark">🦷</div>
            <div>
              <strong>Implantes e reabilitação</strong>
              <span>
                Planejamento para devolver mastigação, confiança e estabilidade
                — com segurança.
              </span>
            </div>
          </div>

          <div className="service reveal">
            <div className="mark">🪥</div>
            <div>
              <strong>Limpeza + prevenção</strong>
              <span>
                Check-ups, profilaxia, orientação e manutenção do seu sorriso em
                dia.
              </span>
            </div>
          </div>

          <div className="service reveal">
            <div className="mark">😁</div>
            <div>
              <strong>Clareamento dental</strong>
              <span>
                Técnicas modernas para elevar o brilho do sorriso com
                acompanhamento profissional.
              </span>
            </div>
          </div>

          <div className="service reveal">
            <div className="mark">🩺</div>
            <div>
              <strong>Tratamento de gengiva</strong>
              <span>
                Saúde periodontal para evitar sangramento, mau hálito e perda
                óssea.
              </span>
            </div>
          </div>

          <div className="service reveal">
            <div className="mark">🔧</div>
            <div>
              <strong>Restaurações estéticas</strong>
              <span>
                Recuperação de dentes com materiais e acabamento premium.
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "16px" }} className="reveal">
          <a className="btn btn-primary" href="#contato">
            Quero agendar minha avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
