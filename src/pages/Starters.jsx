import MenuItem from '../components/MenuItem'
import MenuCategoryNav from '../components/MenuCategoryNav'

function Starters() {
  return (
    <>
      <section className="menu-header">
        <h1>Entrantes</h1>
        <p>Comienza tu experiencia gastronómica con nuestras deliciosas entradas</p>
      </section>

      <MenuCategoryNav current="/starters" />

      <section className="menu-items">
        <MenuItem img="/assets/entrante1.avif" imgAlt="Croquetas caseras de jamón ibérico" title="Croquetas Caseras" description="Croquetas cremosas de jamón ibérico elaboradas de forma artesanal" price="8,50€" />
        <MenuItem img="/assets/entrante2.avif" imgAlt="Ensalada de verduras frescas" title="Ensalada de la Huerta" description="Verduras frescas de temporada con vinagreta casera" price="7,00€" />
        <MenuItem img="/assets/entrante3.avif" imgAlt="Tabla de quesos artesanales" title="Tabla de Quesos" description="Selección de quesos artesanales con mermelada y frutos secos" price="12,00€" />
        <MenuItem img="/assets/entrante4.avif" imgAlt="Bol de gazpacho andaluz" title="Gazpacho Andaluz" description="Sopa fría de tomate con verduras frescas del día" price="6,50€" />
      </section>
    </>
  )
}

export default Starters
