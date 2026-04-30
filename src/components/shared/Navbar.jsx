import { Navbar as BsNavbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function Navbar() {
  const { items } = useCart()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <BsNavbar bg="white" expand="lg" sticky="top" className="navbar" as="header" role="banner">
      <Container fluid className="navbar-container">
        <BsNavbar.Brand as={Link} to="/" className="navbar-logo" aria-label="Foodie Diw&Co - Ir a inicio">
          <img src="/assets/logo.avif" className="navbar-logo-img" alt="" aria-hidden="true" />
          Foodie Diw&amp;Co
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="navbar-offcanvas"
          aria-label="Abrir menú de navegación"
        />

        <BsNavbar.Offcanvas id="navbar-offcanvas" placement="end" aria-label="Menú de navegación">
          <Offcanvas.Header closeButton closeLabel="Cerrar menú">
            <Offcanvas.Title>Foodie Diw&amp;Co</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav as="nav" aria-label="Navegación principal" className="ms-auto">
              <Nav.Link as={NavLink} to="/" end aria-label='Inicio'>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/about-us" aria-label='Sobre Nosotros'>Sobre Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" aria-label='Contacto'>Contacto</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="cart-icon" aria-label="Carrito de compra">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="cart-badge" aria-label={`${totalItems} productos en el carrito`}>{totalItems}</span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
