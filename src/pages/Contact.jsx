function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p className="contact-subtitle">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required placeholder="Tu nombre completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="6" required placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>

        <div className="contact-image">
          <img src="/assets/question.png" alt="Contacto" />
        </div>
      </div>

      <div className="contact-info-card">
        <h3>O puedes contactarnos en:</h3>
        <div className="info-items">
          <div className="info-item">
            <strong>Teléfono:</strong>
            <p>+34 985 123 456</p>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>info@foodiediwco.com</p>
          </div>
          <div className="info-item">
            <strong>Dirección:</strong>
            <p>Calle Principal 123, 33001 Oviedo, Asturias</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
