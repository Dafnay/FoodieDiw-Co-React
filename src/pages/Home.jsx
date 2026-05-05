import { lazy, Suspense, useEffect } from 'react'
import CategoryBubble from '../components/CategoryBubble'
import ImageTextSection from '../components/shared/ImageTextSection'
import Slider from '../components/shared/Slider'

const Map = lazy(() => import('../components/shared/Map'))

function Home() {
  useEffect(() => { document.title = 'Inicio | Foodie Diw&Co' }, [])
  return (
    <>
      {/* Slider visible en SM+ */}
      <div className="d-none d-sm-block">
        <Slider />
      </div>

      {/* Banner estático visible solo en XS */}
      <section className="banner d-sm-none">
        <img src="/assets/banner.avif" alt="Platos del restaurante Foodie Diw&Co en Oviedo, Asturias" className="banner-img" width="1066" height="300" />
        <div className="banner-text">
          <h1>Descubre los mejores sabores en un solo lugar</h1>
        </div>
      </section>

      <section className="categories">
        <CategoryBubble href="/starters" img="/assets/entrantes.avif" label="Entrantes" imgAlt="Croquetas caseras de jamón" />
        <CategoryBubble href="/mains" img="/assets/principales.avif" label="Principales" imgAlt="Plato de paella valenciana" />
        <CategoryBubble href="/desserts" img="/assets/postres.avif" label="Postres" imgAlt="Tarta de queso con frutos rojos" />
        <CategoryBubble href="/drinks" img="/assets/bebidas.avif" label="Bebidas" imgAlt="Variedad de bebidas y cócteles" />
      </section>

      <ImageTextSection
        img="/assets/delivery.avif"
        imgAlt="Delivery"
        title="Pide a Domicilio"
        compact
      >
        <p>Recibe tus platos favoritos en la puerta de tu casa. Entrega en menos de 45 minutos.</p>
        <ul>
          <li>Packaging sostenible</li>
          <li>Seguimiento en tiempo real</li>
        </ul>
      </ImageTextSection>

      <ImageTextSection
        title="Visítanos en..."
        imgRight
        bg="#f9f9f9"
        media={
          <Suspense fallback={<div style={{ height: '400px', background: '#f0f0f0', borderRadius: '8px', width: '100%' }} />}>
            <Map />
          </Suspense>
        }
      >
        <div className="mt-3">
          <p><strong>Dirección:</strong></p>
          <p>Calle Principal 123</p>
          <p>33001 Oviedo, Asturias</p>
        </div>
        <hr />
        <div>
          <p><strong>Horario:</strong></p>
          <p>Lunes - Viernes: 14:00 - 22:00</p>
          <p>Sábados: 13:00 - 22:00</p>
        </div>
      </ImageTextSection>
    </>
  )
}

export default Home
