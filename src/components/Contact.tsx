import { type FormEvent } from "react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const when = (form.elements.namedItem("when") as HTMLSelectElement).value;
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value.trim();

    const text =
      `Olá! Quero agendar uma avaliação.%0A` +
      `Nome: ${encodeURIComponent(name)}%0A` +
      `WhatsApp: ${encodeURIComponent(phone)}%0A` +
      `Interesse: ${encodeURIComponent(service)}%0A` +
      `Horário: ${encodeURIComponent(when)}%0A` +
      (msg ? `Mensagem: ${encodeURIComponent(msg)}%0A` : "");

    const wa = `https://wa.me/5599999999999?text=${text}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Contato</div>
          <h2 className="section-h2">Agende sua avaliação</h2>
          <p className="section-sub">
            Preencha o formulário ou chame no WhatsApp. Retorno rápido em
            horário comercial.
          </p>
        </div>

        <div className="contact">
          <div className="card reveal">
            <h3 style={{ marginTop: 0 }}>Formulário</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="service">Tratamento de interesse</label>
                  <select id="service" name="service" required>
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Clareamento</option>
                    <option>Lentes/Facetas</option>
                    <option>Implantes</option>
                    <option>Limpeza/Prevenção</option>
                    <option>Restaurações</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="when">Melhor horário</label>
                  <select id="when" name="when" required>
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="msg">Mensagem (opcional)</label>
                <textarea
                  id="msg"
                  name="msg"
                  placeholder="Conte rapidamente seu objetivo (ex.: melhorar estética do sorriso)"
                ></textarea>
              </div>

              <button className="btn btn-primary" type="submit">
                Enviar e solicitar retorno
              </button>
              <p className="fineprint">
                Ao enviar, você concorda em receber contato para agendamento.
                Não enviamos spam.
              </p>
            </form>
          </div>

          <div className="map reveal" aria-label="Localização">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.%20Paulista,%201000%20-%20S%C3%A3o%20Paulo&output=embed"
            ></iframe>
            <div className="map-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
