import { Carousel } from 'react-bootstrap'

const slides = [
  { img: '/assets/banner.avif', alt: 'Foto de plato de entrante, con embutido y fruta'},
  { img: '/assets/banner1.avif', alt: 'Foto de tomates de la huerta'},
  { img: '/assets/banner2.avif', alt: 'Foto de ensalada de verano' },
  { img: '/assets/banner3.avif', alt: 'Foto de un plato de salmón' },
]

function Slider() {
  return (
    <Carousel interval={4000} pause="hover" className="banner-slider">
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <img src={slide.img} alt={slide.alt} className="d-block w-100 slider-img" />
          <Carousel.Caption className="slider-caption">
            <h1>Descubre los mejores sabores en un solo lugar</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
