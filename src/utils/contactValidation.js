const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'El nombre es requerido'
  if (!form.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = 'El formato del email no es válido'
  }
  if (!form.message.trim()) errors.message = 'El mensaje es requerido'
  return errors
}
