import MenuItem from '../components/MenuItem'
import MenuCategoryNav from '../components/MenuCategoryNav'

function Desserts() {
  return (
    <>
      <section className="menu-header">
        <h1>Postres</h1>
        <p>El dulce final perfecto para tu comida</p>
      </section>

      <MenuCategoryNav current="/desserts" />

      <section className="menu-items">
        <MenuItem img="/assets/postre1.avif" imgAlt="Cheesecake con coulis de frutos rojos" title="Tarta de Queso" description="Cheesecake cremoso con base de galleta y coulis de frutos rojos" price="6,50€" />
        <MenuItem img="/assets/postre2.avif" imgAlt="Tiramisú italiano con mascarpone" title="Tiramisú Italiano" description="Postre tradicional italiano con mascarpone y café" price="7,00€" />
        <MenuItem img="/assets/postre3.avif" imgAlt="Brownie de chocolate con helado de vainilla" title="Brownie con Helado" description="Brownie de chocolate caliente con helado de vainilla" price="6,00€" />
        <MenuItem img="/assets/postre4.avif" imgAlt="Flan casero con caramelo" title="Flan Casero" description="Flan tradicional con caramelo líquido hecho en casa" price="5,00€" />
        <MenuItem img="/assets/postre5.avif" imgAlt="Tarta de chocolate negro con fresas" title="Tarta de Chocolate" description="Tarta de chocolate negro con ganache y decoración de fresas" price="7,50€" />
        <MenuItem img="/assets/postre6.webp" imgAlt="Crema catalana con azúcar caramelizado" title="Crema Catalana" description="Crema catalana tradicional con azúcar caramelizado" price="5,50€" />
      </section>
    </>
  )
}

export default Desserts
