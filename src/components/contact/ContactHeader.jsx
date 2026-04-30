function ContactHeader({ title = 'Contacto', subtitle = '¿Tienes alguna pregunta? Estamos aquí para ayudarte' }) {
  return (
    <div className="contact-header">
      <h1>{title}</h1>
      <p className="contact-subtitle">{subtitle}</p>
    </div>
  )
}

export default ContactHeader
