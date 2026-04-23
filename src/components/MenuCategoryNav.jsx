import { Link } from 'react-router-dom'

const CATEGORIES = [
  { to: '/starters', label: 'Entrantes' },
  { to: '/mains', label: 'Principales' },
  { to: '/desserts', label: 'Postres' },
  { to: '/drinks', label: 'Bebidas' },
]

function MenuCategoryNav({ current }) {
  return (
    <div className="menu-category-nav-wrapper">
      <h4>Explorar categorías</h4>
      <ul className="menu-category-nav">
        {CATEGORIES.map(({ to, label }) => (
          <li key={to} className={current === to ? 'current-page' : ''}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuCategoryNav
