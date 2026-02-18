import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <strong>Dra. Ana Silva</strong>
            <br />
            CRO/UF 00000 • Odontologia Premium
          </div>
          <div>
            <strong>Endereço</strong>
            <br />
            Rua Exemplo, 123 • Centro • Sua Cidade
          </div>
          <div>
            <strong>Horários</strong>
            <br />
            Seg–Sex: 09:00–18:00 • Sáb: 09:00–12:00
          </div>
          <div>
            <strong>Contato</strong>
            <br />
            WhatsApp: (99) 99999-9999
          </div>
        </div>
        <p style={{ marginTop: "16px" }}>
          © {currentYear} • Todos os direitos reservados •
          Desenvolvido com padrão premium inox + ouro.
        </p>
      </div>
    </footer>
  );
}
