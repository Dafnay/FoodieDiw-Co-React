import { useState } from 'react'
import { validateContactForm } from '../../utils/contactValidation'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    if (Object.keys(errors).length > 0) {
      setErrors(validateContactForm(updated))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    console.log('Formulario enviado:', form)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
    setSuccess(true)
  }

  return (
    <div className="contact-form-wrapper">
      {success && (
        <div className="alert alert-success" role="alert">
          ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            value={form.name}
            onChange={handleChange}

            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}

            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Escribe tu mensaje aquí..."
            value={form.message}
            onChange={handleChange}

            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm
