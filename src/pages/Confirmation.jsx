import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import './Confirmation.css'

const confirmationFields = [
  {
    key: 'service',
    label: 'Service',
    fallback: 'Signature Cut',
    symbol: 'S',
  },
  {
    key: 'date',
    label: 'Date',
    fallback: 'Fri',
    symbol: 'D',
  },
  {
    key: 'time',
    label: 'Time',
    fallback: '9:00 AM',
    symbol: 'T',
  },
  {
    key: 'barber',
    label: 'Barber',
    fallback: 'Any Barber',
    symbol: 'B',
  },
  {
    key: 'price',
    label: 'Price',
    fallback: '$35',
    symbol: '$',
  },
  {
    key: 'location',
    label: 'Location',
    fallback: '123 Barber Street, Ottawa, ON',
    symbol: 'L',
  },
  {
    key: 'firstName',
    label: 'First Name',
    fallback: 'Not provided',
    symbol: 'F',
  },
  {
    key: 'lastName',
    label: 'Last Name',
    fallback: 'Not provided',
    symbol: 'N',
  },
  {
    key: 'email',
    label: 'Email',
    fallback: 'Not provided',
    symbol: '@',
  },
  {
    key: 'phone',
    label: 'Phone',
    fallback: 'Not provided',
    symbol: 'P',
  },
  {
    key: 'address',
    label: 'Address',
    fallback: 'Not provided',
    symbol: 'A',
  },
  {
    key: 'postalCode',
    label: 'Postal Code',
    fallback: 'Not provided',
    symbol: 'PC',
  },
]

function Confirmation() {
  const [searchParams] = useSearchParams()

  return (
    <>
      <Navbar expand="lg" className="site-navbar confirmation-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-mark">
            <span className="brand-icon">FF</span>
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
              <Nav.Link as={Link} to="/booking">
                Book
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
                  <dt>
                    <span className="confirmation-symbol" aria-hidden="true">
                      {field.symbol}
                    </span>
                    {field.label}
                  </dt>
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
