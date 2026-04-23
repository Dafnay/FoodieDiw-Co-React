import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <Container fluid="xl">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h3>Foodie Diw&amp;Co</h3>
            <p className="text-secondary mb-0">&copy; 2025 Todos los derechos reservados</p>
          </Col>
          <Col xs={12} md={6}>
            <Nav className="justify-content-center justify-content-md-end gap-3">
              <Nav.Link href="/contact" className="text-white p-0">Contacto</Nav.Link>
              <Nav.Link href="/about-us" className="text-white p-0">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/faqs" className="text-white p-0">FAQs</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
