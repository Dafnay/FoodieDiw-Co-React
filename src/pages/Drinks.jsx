import { useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import MenuCategoryNav from '../components/MenuCategoryNav'

function Drinks() {
  useEffect(() => { document.title = 'Bebidas | Foodie Diw&Co' }, [])
  return (
    <>
      <section className="menu-header">
        <h1>Bebidas</h1>
        <p>Refrescantes bebidas para acompañar tu comida</p>
      </section>

      <MenuCategoryNav current="/drinks" />

      <section className="menu-items">
        <MenuItem img="/assets/bebida1.avif" imgAlt="Vino tinto en copa" title="Vino Tinto Reserva" description="Selección de vinos tintos de la casa" price="12,00€" />
        <MenuItem img="/assets/bebida2.avif" imgAlt="Botella de cerveza artesanal" title="Cerveza Artesanal" description="Cerveza artesanal de producción local" price="4,50€" />
        <MenuItem img="/assets/bebida3.avif" imgAlt="Vaso de zumo de naranja" title="Zumo Natural" description="Zumo recién exprimido de naranja o limón" price="3,50€" />
        <MenuItem img="/assets/bebida4.avif" imgAlt="Jarra de sangría con frutas" title="Sangría de la Casa" description="Sangría tradicional con frutas frescas" price="8,00€" />
        <MenuItem img="/assets/bebida5.avif" imgAlt="Botella de agua mineral" title="Agua Mineral" description="Agua mineral con o sin gas" price="2,50€" />
      </section>
    </>
  )
}

export default Drinks
