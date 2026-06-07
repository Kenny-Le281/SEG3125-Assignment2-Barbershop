import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Visit.css'
import logo from '../assets/logo.png'

function Visit() {
  return (
    <>
      <Navbar expand="lg" className="site-navbar visit-navbar">
        <Container>
          <Navbar.Brand href="/" className="brand-mark">
            <img src={logo} alt="FreshFade Studio" className="brand-icon" />
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
            <Col lg={4}>
              <div className="visit-info">
                <section>
                  <h2>Address</h2>
                  <p>5065 Ch. Queen Mary</p>
                  <p>Montréal, QC H3W 1X4</p>
                </section>

                <section>
                  <h2>Phone</h2>
                  <p>(514) 430-2752</p>
                </section>

                <section>
                  <h2>Hours</h2>
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </section>
              </div>
            </Col>
            <Col lg={8}>
              <div className="visit-map">
                <iframe
                  title="FreshFade Studio location"
                  src="https://www.google.com/maps?q=Faded+Studio+Barbershop&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Visit
