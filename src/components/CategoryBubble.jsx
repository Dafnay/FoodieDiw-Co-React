import { Link } from 'react-router-dom'

function CategoryBubble({ href, img, label, imgAlt }) {
  return (
    <Link to={href} className="category-bubble">
      <div className="bubble-circle">
        <img src={img} alt={imgAlt} />
      </div>
      <h3>{label}</h3>
    </Link>
  )
}

export default CategoryBubble
