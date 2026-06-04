import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Visit.css'

function Visit() {
  return (
    <>
      <Navbar expand="lg" className="site-navbar visit-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-mark">
            <span className="brand-icon">FF</span>
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="visit-navbar" />
          <Navbar.Collapse id="visit-navbar">
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/booking">
                Book
              </Nav.Link>
              <Nav.Link as={Link} to="/visit" active>
                Location
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/services" className="btn-book">
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="visit-page">
        <Container>
          <div className="visit-heading">
            <p className="eyebrow">FreshFade Studio</p>
            <h1>Visit Us</h1>
            <p>Find our studio, call ahead, or check when we are open.</p>
          </div>

          <Row className="align-items-center g-5 visit-content">
            <Col lg={5}>
              <div className="visit-info">
                <section>
                  <h2>Address</h2>
                  <p>123 Barber Street</p>
                  <p>Ottawa, ON K1N 1A1</p>
                </section>

                <section>
                  <h2>Phone</h2>
                  <p>(613) 555-0198</p>
                </section>

                <section>
                  <h2>Hours</h2>
                  <p>Monday to Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </section>

                <Button className="btn-book visit-call">Call Us</Button>
              </div>
            </Col>
            <Col lg={7}>
              <div className="visit-map">
                <span>Map Placeholder</span>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Visit
