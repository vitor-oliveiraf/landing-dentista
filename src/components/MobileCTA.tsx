import "./MobileCTA.css";

export default function MobileCTA() {
  return (
    <div className="mobile-cta" role="region" aria-label="Ações rápidas">
      <div className="row">
        <a className="btn" href="#contato" aria-label="Agendar avaliação">
          Agendar avaliação
        </a>
        <a
          className="btn btn-primary"
          href="https://wa.me/5599999999999?text=Ol%C3%A1!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
        >
          WhatsApp
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></path>
            <path
              d="M8.7 10.3c.2-.5.4-.6.7-.6h.5c.2 0 .4 0 .5.4l.4 1c.1.3.1.5 0 .6l-.2.3c-.1.2-.2.3-.1.5c.1.3.5 1 1.1 1.5c.8.7 1.5 1 1.7 1.1c.2.1.4.1.6-.1l.4-.5c.2-.2.4-.2.7-.1l1 .4c.3.1.5.3.5.5c0 .2-.1.9-.6 1.3c-.5.4-1.1.5-1.5.4c-.4-.1-1.8-.6-3.1-1.8c-1.3-1.2-2-2.7-2.1-3.2c-.1-.5.1-1.3.5-1.7Z"
              fill="none"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
