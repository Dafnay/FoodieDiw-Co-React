import { Link } from 'react-router-dom'

function Button({ title, variant = 'primary', onClick, href, type = 'button', className = '' }) {
  if (href) {
    return <Link to={href} className={`btn btn-${variant} ${className}`}>{title}</Link>
  }

  return (
    <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
