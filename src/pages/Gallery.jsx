import { useState } from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Gallery.css'
import logo from '../assets/logo.png'
import classicCrop from '../assets/classicCrop.jpg'
import texturedFringe from '../assets/texturedFringe.jpg'
import lowFade from '../assets/lowFade.jpg'
import midFade from '../assets/midFade.jpg'
import midTaper from '../assets/midTaper.jpg'
import kidsCut from '../assets/kidsCut.jpg'
import lineup from '../assets/lineup.jpg'

const filters = ['Haircuts', 'Fades', 'Kids Cuts', 'Lineups']

const haircuts = [
  {
    title: 'Classic Crop',
    category: 'Haircuts',
    description: 'Clean everyday shape with tidy edges.',
    image: classicCrop,
  },
  {
    title: 'Textured Fringe',
    category: 'Haircuts',
    description: 'Natural movement with a styled finish.',
    image: texturedFringe,
  },
  {
    title: 'Low Fade',
    category: 'Fades',
    description: 'Soft fade kept low around the sides.',
    image: lowFade,
  },
  {
    title: 'Mid Fade',
    category: 'Fades',
    description: 'Balanced fade with a sharper profile.',
    image: midFade,
  },
  {
    title: 'Mid Taper',
    category: 'Fades',
    description: 'A smooth taper with a clean transition around the sides.',
    image: midTaper,
  },
  {
    title: 'Kids Trim',
    category: 'Kids Cuts',
    description: 'Simple, comfortable, and easy to maintain.',
    image: kidsCut,
  },
  {
    title: 'Lineup',
    category: 'Lineups',
    description: 'Crisp edges around the hairline and beard.',
    image: lineup,
  },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Haircuts')
  const visibleHaircuts = haircuts.filter((haircut) => haircut.category === activeFilter)

  return (
    <>
      <Navbar expand="lg" className="site-navbar gallery-navbar">
        <Container>
          <Navbar.Brand href="/" className="brand-mark">
            <img src={logo} alt="FreshFade Studio" className="brand-icon" />
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="gallery-navbar" />
          <Navbar.Collapse id="gallery-navbar">
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" active>
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/visit">
                Location
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/services" className="btn-book">
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="haircut-gallery-page">
        <Container>
          <div className="gallery-heading">
            <p className="eyebrow">FreshFade looks</p>
            <h1>Our Haircut Gallery</h1>
            <p>Browse different haircut styles before choosing your appointment.</p>
          </div>

          <div className="gallery-filter-bar" aria-label="Gallery categories">
            {filters.map((filter) => (
              <Button
                key={filter}
                type="button"
                className="gallery-filter"
                variant={filter === activeFilter ? 'primary' : 'outline-primary'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          <Row className="g-4 justify-content-center">
            {visibleHaircuts.map((haircut) => (
              <Col md={6} lg={4} key={haircut.title}>
                <article className="haircut-card">
                  <img src={haircut.image} alt={haircut.title} className="haircut-image" />
                  <div className="haircut-card-body">
                    <h2>{haircut.title}</h2>
                    <p>{haircut.description}</p>
                    <Button
                      as={Link}
                      to={`/booking?service=${encodeURIComponent(
                        haircut.category === 'Fades' ? 'Fade & Lineup' : 'Signature Cut',
                      )}`}
                      className="btn-book w-100"
                    >
                      Book This Look
                    </Button>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Gallery
