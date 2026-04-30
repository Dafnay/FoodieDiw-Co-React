import { useState } from 'react'

const faqs = [
  {
    id: 0,
    question: '¿Cuál es el horario de atención?',
    answer: 'Nuestro horario de atención es de lunes a viernes de 14:00 a 22:00 horas, y sábados de 13:00 a 22:00 horas. Los domingos permanecemos cerrados.',
  },
  {
    id: 1,
    question: '¿Ofrecen opciones veganas y vegetarianas?',
    answer: 'Sí, contamos con una amplia variedad de platos veganos y vegetarianos elaborados con ingredientes frescos y de temporada. Todos nuestros menús están claramente identificados.',
  },
  {
    id: 2,
    question: '¿Realizan entregas a domicilio?',
    answer: 'Sí, realizamos entregas a domicilio en un radio de 10 km. El costo de envío varía según la distancia. Los pedidos superiores a 30€ tienen envío gratuito.',
  },
  {
    id: 3,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de crédito y débito (Visa, Mastercard, American Express), y pagos mediante Bizum y transferencia bancaria para pedidos grandes.',
  },
  {
    id: 4,
    question: '¿Cuál es su política de cancelación?',
    answer: 'Las cancelaciones de reservaciones deben realizarse con al menos 12 horas de anticipación. Para pedidos a domicilio, se puede cancelar hasta 30 minutos después de realizar el pedido sin cargo adicional.',
  },
  {
    id: 5,
    question: '¿Ofrecen catering para eventos?',
    answer: 'Sí, ofrecemos servicio de catering para eventos corporativos, celebraciones y reuniones. Contacta con nosotros para obtener un presupuesto personalizado según tus necesidades.',
  },
]

function Faqs() {
  const [activeId, setActiveId] = useState(null)

  const toggle = (id) => setActiveId(prev => prev === id ? null : id)

  return (
    <section className="faqs-section">
      <h1>Preguntas Frecuentes</h1>
      <p className="faqs-intro">Encuentra respuestas a las preguntas más comunes sobre nuestros servicios</p>

      <div className="accordion faqs-container">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="accordion-item faq-item">
            <h2 className="accordion-header">
              <button
                type="button"
                className={`accordion-button faq-question${activeId === id ? '' : ' collapsed'}`}
                onClick={() => toggle(id)}
              >
                <span>{question}</span>
                <i className="fas fa-chevron-down faq-icon"></i>
              </button>
            </h2>
            <div className={`accordion-collapse collapse${activeId === id ? ' show' : ''}`}>
              <div className="accordion-body faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs
