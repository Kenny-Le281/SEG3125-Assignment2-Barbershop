import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import './Confirmation.css'
import logo from '../assets/logo.png'

const confirmationFields = [
  {
    key: 'service',
    label: 'Service',
    fallback: 'Signature Cut',
  },
  {
    key: 'date',
    label: 'Date',
    fallback: 'Fri',
  },
  {
    key: 'time',
    label: 'Time',
    fallback: '9:00 AM',
  },
  {
    key: 'barber',
    label: 'Barber',
    fallback: 'Any Barber',
  },
  {
    key: 'price',
    label: 'Price',
    fallback: '$35',
  },
  {
    key: 'location',
    label: 'Location',
    fallback: '123 Barber Street, Ottawa, ON',
  },
  {
    key: 'firstName',
    label: 'First Name',
    fallback: 'Not provided',
  },
  {
    key: 'lastName',
    label: 'Last Name',
    fallback: 'Not provided',
  },
  {
    key: 'email',
    label: 'Email',
    fallback: 'Not provided',
  },
  {
    key: 'phone',
    label: 'Phone',
    fallback: 'Not provided',
  },
  {
    key: 'address',
    label: 'Address',
    fallback: 'Not provided',
  },
  {
    key: 'postalCode',
    label: 'Postal Code',
    fallback: 'Not provided',
  },
]

function Confirmation() {
  const [searchParams] = useSearchParams()

  return (
    <>
      <Navbar expand="lg" className="site-navbar confirmation-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-mark">
            <img src={logo} alt="FreshFade Studio" className="brand-icon" />
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="confirmation-navbar" />
          <Navbar.Collapse id="confirmation-navbar">
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
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

      <main className="confirmation-page">
        <Container>
          <h1 className="confirmation-title">Appointment Booked</h1>

          <section className="confirmation-card">
            <h2>Confirmation</h2>
            <p className="confirmation-message">Your appointment has been confirmed.</p>
            <dl className="confirmation-list">
              {confirmationFields.map((field) => (
                <div className="confirmation-row" key={field.key}>
                  <dt>{field.label}</dt>
                  <dd>{searchParams.get(field.key) || field.fallback}</dd>
                </div>
              ))}
            </dl>

            <Button as={Link} to="/" className="btn-book confirmation-home">
              Back to Home
            </Button>
          </section>
        </Container>
      </main>
    </>
  )
}

export default Confirmation
