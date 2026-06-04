import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    name: 'Signature Cut',
    time: '45 min',
    price: '$35',
  },
  {
    name: 'Fade & Lineup',
    time: '50 min',
    price: '$42',
  },
  {
    name: 'Beard Trim',
    time: '25 min',
    price: '$20',
  },
]

function Home() {
  return (
    <>
      <Navbar expand="lg" className="site-navbar">
        <Container>
          <Navbar.Brand href="/" className="brand-mark">
            <span className="brand-icon">FF</span>
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="home-navbar" />
          <Navbar.Collapse id="home-navbar">
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/visit">Visit Us</Nav.Link>
            </Nav>
            <Button as={Link} to="/services" className="btn-book">
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="home-page" id="home">
        <section className="hero-section">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6} className="text-lg-start">
                <p className="eyebrow">Modern barbershop</p>
                <h1 className="hero-title">Clean cuts, sharp fades, easy booking.</h1>
                <p className="hero-text">
                  FreshFade Studio keeps appointments simple with focused services,
                  reliable timing, and a clean studio experience.
                </p>
                <div className="hero-actions">
                  <Button as={Link} to="/services" className="btn-book btn-lg">
                    Choose a Service
                  </Button>
                  <Button as={Link} to="/visit" variant="outline-primary" className="btn-lg">
                    Location
                  </Button>
                </div>
              </Col>
              <Col lg={6}>
                <div className="hero-image-wrap">
                  <div className="hero-image" role="img" aria-label="FreshFade Studio barber chair">
                    Barbershop Image
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="services-section" id="services">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Choose your service</p>
              <h2>Popular appointments</h2>
              <p>Pick a service to start your booking.</p>
            </div>

            <Row className="g-4 justify-content-center">
              {services.map((service) => (
                <Col md={6} lg={4} key={service.name}>
                  <Card className="service-card h-100">
                    <Card.Body>
                      <div className="service-icon" aria-hidden="true" />
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>{service.time}</Card.Text>
                      <p className="service-price">{service.price}</p>
                      <Button
                        as={Link}
                        to={`/booking?service=${encodeURIComponent(service.name)}`}
                        className="btn-book w-100"
                      >
                        Book Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="gallery-section" id="gallery">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">Gallery</p>
              <h2>Recent work</h2>
              <p>Fresh fades, classic cuts, and clean lineups.</p>
            </div>
            <Row className="g-4">
              {['Classic taper', 'Low fade', 'Kids cut'].map((title) => (
                <Col md={4} key={title}>
                  <Link to="/gallery" className="gallery-card-link">
                    <div className="gallery-card">
                    <div className="gallery-placeholder" />
                    <h3>{title}</h3>
                    <p>FreshFade finish</p>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/gallery" className="btn-book mt-4">
              View Gallery
            </Button>
          </Container>
        </section>

        <section className="visit-section" id="visit">
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={5} className="text-lg-start">
                <p className="eyebrow">Visit Us</p>
                <h2>Drop by the studio</h2>
                <p className="visit-copy">123 Barber Street, Ottawa, ON</p>
                <p className="visit-copy">Mon to Fri, 9:00 AM - 7:00 PM</p>
                <Button className="btn-book mt-3">Call Us</Button>
              </Col>
              <Col lg={7}>
                <div className="map-placeholder">Map Placeholder</div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
