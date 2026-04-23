import MenuItem from '../components/MenuItem'
import MenuCategoryNav from '../components/MenuCategoryNav'

function Mains() {
  return (
    <>
      <section className="menu-header">
        <h1>Platos Principales</h1>
        <p>Nuestras especialidades más deliciosas para tu paladar</p>
      </section>

      <MenuCategoryNav current="/mains" />

      <section className="menu-items">
        <MenuItem img="/assets/principal1.avif" imgAlt="Paella valenciana con mariscos" title="Paella Valenciana" description="Arroz tradicional con mariscos frescos, pollo y azafrán" price="18,50€" />
        <MenuItem img="/assets/principal2.avif" imgAlt="Solomillo con salsa de roquefort" title="Solomillo al Roquefort" description="Solomillo de ternera con salsa de queso roquefort y patatas" price="22,00€" />
        <MenuItem img="/assets/principal3.avif" imgAlt="Merluza a la vasca con almejas" title="Merluza a la Vasca" description="Merluza fresca con salsa verde y almejas" price="19,50€" />
        <MenuItem img="/assets/principal4.avif" imgAlt="Lasaña casera gratinada" title="Lasaña Casera" description="Lasaña de pasta fresca con boloñesa y bechamel gratinada" price="15,00€" />
        <MenuItem img="/assets/principal5.avif" imgAlt="Paletilla de cordero asada" title="Cordero Asado" description="Paletilla de cordero asada con hierbas aromáticas" price="24,00€" />
        <MenuItem img="/assets/principal6.avif" imgAlt="Risotto cremoso de setas" title="Risotto de Setas" description="Risotto cremoso con setas de temporada y parmesano" price="16,50€" />
      </section>
    </>
  )
}

export default Mains
