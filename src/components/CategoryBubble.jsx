import { Link } from 'react-router-dom'

function CategoryBubble({ href, img, label, imgAlt }) {
  return (
    <Link to={href} className="category-bubble">
      <div className="bubble-circle">
        <img src={img} alt={imgAlt} />
      </div>
      <span className="bubble-label">{label}</span>
    </Link>
  )
}

export default CategoryBubble
