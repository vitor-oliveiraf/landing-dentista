import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Prova Social</div>
          <h2 className="section-h2">
            Depoimentos que refletem confiança e cuidado.
          </h2>
          <p className="section-sub">
            Substitua pelos seus (Google/Instagram/WhatsApp) — com permissão do
            paciente.
          </p>
        </div>

        <div className="grid-3">
          <div className="card quote reveal">
            <h3>“Atendimento impecável”</h3>
            <p>
              Me senti segura do começo ao fim. Explicações claras e resultado
              muito natural.
            </p>
            <div className="stars">★★★★★</div>
            <p
              style={{
                marginTop: "10px",
                color: "rgba(244, 246, 251, 0.62)",
                fontSize: "12px",
              }}
            >
              — Mariana R
            </p>
          </div>

          <div className="card quote reveal">
            <h3>“Clínica linda e organizada”</h3>
            <p>
              Ambiente premium, pontualidade e um cuidado que dá para perceber
              nos detalhes.
            </p>
            <div className="stars">★★★★★</div>
            <p
              style={{
                marginTop: "10px",
                color: "rgba(244, 246, 251, 0.62)",
                fontSize: "12px",
              }}
            >
              — Carlos P
            </p>
          </div>

          <div className="card quote reveal">
            <h3>“Mudou minha autoestima”</h3>
            <p>
              Fiz clareamento e restaurações. Ficou perfeito e sem exagero.
              Recomendo demais.
            </p>
            <div className="stars">★★★★★</div>
            <p
              style={{
                marginTop: "10px",
                color: "rgba(244, 246, 251, 0.62)",
                fontSize: "12px",
              }}
            >
              — Fernanda L.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
