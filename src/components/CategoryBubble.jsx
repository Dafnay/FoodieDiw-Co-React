function CategoryBubble({ href, img, label, imgAlt }) {
  return (
    <a href={href} className="category-bubble">
      <div className="bubble-circle">
        <img src={img} alt={imgAlt} />
      </div>
      <h3>{label}</h3>
    </a>
  )
}

export default CategoryBubble
