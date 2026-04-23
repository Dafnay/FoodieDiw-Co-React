import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ImageTextSection({ img, imgAlt, media, title, children, imgRight = false, bg = '#fff', compact = false }) {
  const imageCol = (
    <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
      {media ?? <img src={img} alt={imgAlt} className="img-fluid rounded" style={{ maxHeight: '400px', objectFit: 'contain' }} />}
    </Col>
  )

  const textCol = (
    <Col xs={12} md={7} className="d-flex flex-column justify-content-center">
      <h2>{title}</h2>
      {children}
    </Col>
  )

  return (
    <section style={{ backgroundColor: bg }}>
      <Container fluid="xl" className={compact ? 'py-3' : 'py-5'}>
        <Row className="align-items-center g-5">
          {imgRight ? <>{textCol}{imageCol}</> : <>{imageCol}{textCol}</>}
        </Row>
      </Container>
    </section>
  )
}

export default ImageTextSection
