import Map from '../components/Map'

function Home() {
  return (
    <>
      <section className="banner">
        <img src="/assets/banner.jpg" alt="Banner" className="banner-img" />
        <div className="banner-text">
          <h1>Descubre los mejores sabores en un solo lugar</h1>
        </div>
      </section>

      <section className="categories">
        <a href="/starters" className="category-bubble">
          <div className="bubble-circle">
            <img src="/assets/entrantes.jpg" alt="Entrantes" />
          </div>
          <h3>Entrantes</h3>
        </a>
        <a href="/mains" className="category-bubble">
          <div className="bubble-circle">
            <img src="/assets/principales.jpg" alt="Principales" />
          </div>
          <h3>Principales</h3>
        </a>
        <a href="/desserts" className="category-bubble">
          <div className="bubble-circle">
            <img src="/assets/postres.jpg" alt="Postres" />
          </div>
          <h3>Postres</h3>
        </a>
        <a href="/drinks" className="category-bubble">
          <div className="bubble-circle">
            <img src="/assets/bebidas.jpg" alt="Bebidas" />
          </div>
          <h3>Bebidas</h3>
        </a>
      </section>

      <section className="delivery">
        <img src="/assets/delivery.png" alt="Delivery" className="delivery-img" />
        <div className="delivery-content">
          <h2>Pide a Domicilio</h2>
          <p>Recibe tus platos favoritos en la puerta de tu casa</p>
        </div>
      </section>

      <section className="visit">
        <div className="visit-wrapper">
          <div className="visit-content">
            <h2>Visítanos en...</h2>
            <div className="visit-address">
              <p><strong>Dirección:</strong></p>
              <p>Calle Principal 123</p>
              <p>33001 Oviedo, Asturias</p>
            </div>
            <div className="visit-schedule">
              <p><strong>Horario:</strong></p>
              <p>Lunes - Viernes: 14:00 - 22:00</p>
              <p>Sábados: 13:00 - 22:00</p>
            </div>
          </div>
          <div className="visit-map">
            <Map />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
