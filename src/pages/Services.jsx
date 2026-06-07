import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Services.css'
import logo from '../assets/logo.png'

const allServices = [
  {
    name: 'Signature Cut',
    icon: '1',
    time: '45 min',
    price: '$35',
    description: 'A clean haircut finished with detail work around the neckline and edges.',
  },
  {
    name: 'Fade & Lineup',
    icon: '2',
    time: '50 min',
    price: '$42',
    description: 'A precise fade with a sharp lineup for a polished, fresh finish.',
  },
  {
    name: 'Beard Trim',
    icon: '3',
    time: '25 min',
    price: '$20',
    description: 'Shape, clean, and balance your beard with careful clipper and scissor work.',
  },
  {
    name: 'Kids Cut',
    icon: '4',
    time: '35 min',
    price: '$28',
    description: 'A simple, comfortable haircut appointment for younger clients.',
  },
  {
    name: 'Hot Towel Shave',
    icon: '5',
    time: '35 min',
    price: '$30',
    description: 'A classic shave with hot towel prep and a smooth, clean finish.',
  },
  {
    name: 'Haircut & Beard',
    icon: '6',
    time: '60 min',
    price: '$55',
    description: 'A full haircut and beard service for a complete refresh.',
  },
]

function Services() {
  return (
    <>
      <Navbar expand="lg" className="site-navbar services-navbar">
        <Container>
          <Navbar.Brand href="/" className="brand-mark">
            <img src={logo} alt="FreshFade Studio" className="brand-icon" />
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="services-navbar" />
          <Navbar.Collapse id="services-navbar">
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services" active>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/visit">
                Location
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/booking" className="btn-book">
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="services-page">
        <Container>
          <div className="services-heading">
            <p className="eyebrow">Book an appointment</p>
            <h1>Services Offered</h1>
            <p>Choose the service that fits your visit, then continue to appointment booking.</p>
          </div>

          <Row className="g-4">
            {allServices.map((service) => (
              <Col md={6} lg={4} key={service.name}>
                <Card className="full-service-card h-100">
                  <Card.Body>
                    <div>
                      <div className="service-icon" aria-hidden="true">
                        {service.icon}
                      </div>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </div>
                    <div>
                      <div className="service-meta">
                        <span>{service.time}</span>
                        <strong>{service.price}</strong>
                      </div>
                      <Button
                        as={Link}
                        to={`/booking?service=${encodeURIComponent(service.name)}`}
                        className="btn-book w-100"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Services
