function Faqs() {
  return (
    <section className="faqs-section">
      <h1>Preguntas Frecuentes</h1>
      <p className="faqs-intro">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios</p>

      <div className="faqs-container">
        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Cuál es el horario de atención?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Nuestro horario de atención es de lunes a viernes de 14:00 a 22:00 horas, y sábados de 13:00 a 22:00 horas. Los domingos permanecemos cerrados.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Ofrecen opciones veganas y vegetarianas?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Sí, contamos con una amplia variedad de platos veganos y vegetarianos elaborados con ingredientes frescos y de temporada. Todos nuestros menús están claramente identificados.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Realizan entregas a domicilio?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Sí, realizamos entregas a domicilio en un radio de 10 km. El costo de envío varía según la distancia. Los pedidos superiores a 30€ tienen envío gratuito.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Qué métodos de pago aceptan?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Aceptamos efectivo, tarjetas de crédito y débito (Visa, Mastercard, American Express), y pagos mediante Bizum y transferencia bancaria para pedidos grandes.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Cuál es su política de cancelación?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Las cancelaciones de reservaciones deben realizarse con al menos 12 horas de anticipación. Para pedidos a domicilio, se puede cancelar hasta 30 minutos después de realizar el pedido sin cargo adicional.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <h3>¿Ofrecen catering para eventos?</h3>
            <i className="fas fa-chevron-down faq-icon"></i>
          </div>
          <div className="faq-answer">
            <p>Sí, ofrecemos servicio de catering para eventos corporativos, celebraciones y reuniones. Contacta con nosotros para obtener un presupuesto personalizado según tus necesidades.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
