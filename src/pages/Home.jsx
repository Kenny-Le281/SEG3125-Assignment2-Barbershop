import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
import logo from '../assets/logo.png'
import barbershopImage from '../assets/barbershop.png'
import midTaper from '../assets/midTaper.jpg'
import lowFade from '../assets/lowFade.jpg'
import kidsCut from '../assets/kidsCut.jpg'
import designerImage from '../assets/profile-headshot.jpg'

const services = [
  {
    name: 'Signature Cut',
    time: '45 min',
    price: '$35',
    icon: '1',
  },
  {
    name: 'Fade & Lineup',
    time: '50 min',
    price: '$42',
    icon: '2',
  },
  {
    name: 'Beard Trim',
    time: '25 min',
    price: '$20',
    icon: '3',
  },
]

const galleryItems = [
  { 
    title: 'Mid Taper', 
    image: midTaper, 
  },
  { 
    title: 'Low Fade', 
    image: lowFade,
  },
  { 
    title: 'Kids Cut', 
    image: kidsCut
  },
]

function Home() {
  return (
    <>
      <Navbar expand="lg" className="site-navbar">
        <Container>
          <Navbar.Brand href="/" className="brand-mark">
            <img src={logo} alt="FreshFade Studio" className="brand-icon" />
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
                <p className="eyebrow">FreshFade Studio</p>
                <h1 className="hero-title">Clean cuts, sharp fades, easy booking.</h1>
                <p className="hero-text">
                  FreshFade Studio delivers high-quality cuts for every age and style.
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
                  <img src={barbershopImage} alt="Inside FreshFade Studio" className="hero-image"/>
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
                      <div className="service-icon" aria-hidden="true">{service.icon}</div>
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
              {galleryItems.map((item) => (
                <Col md={4} key={item.title}>
                  <Link to="/gallery" className="gallery-card-link">
                    <div className="gallery-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                      />
                      <h3>{item.title}</h3>
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

        <section className="designer-section" id="designer">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={5}>
                <div className="designer-image-wrap">
                  <img
                    src={designerImage}
                    alt="Kenny Le, the site designer"
                    className="designer-image"
                  />
                </div>
              </Col>
              <Col lg={7} className="designer-copy text-lg-start">
                <p className="eyebrow">Designed by Kenny Le</p>
                <h2>Meet the site designer</h2>
                <p>
                  Hi I'm Kenny, and I'm a UI design student passionate about building clean,
                  accessible, and welcoming digital experiences.
                </p>
                <p>
                  FreshFade Studio was designed to make discovering services and
                  booking an appointment simple for every customer.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
