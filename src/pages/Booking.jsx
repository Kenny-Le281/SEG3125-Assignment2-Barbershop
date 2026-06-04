import { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import './Booking.css'

const services = [
  { name: 'Signature Cut', price: '$35' },
  { name: 'Fade & Lineup', price: '$42' },
  { name: 'Beard Trim', price: '$20' },
  { name: 'Kids Cut', price: '$28' },
]

const dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const times = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM']
const barbers = ['Jordan', 'Marcus', 'Taylor', 'Any Barber']

function Booking() {
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service')
  const initialService = services.some((service) => service.name === requestedService)
    ? requestedService
    : services[0].name

  const [selectedDate, setSelectedDate] = useState('Fri')
  const [selectedTime, setSelectedTime] = useState('9:00 AM')
  const [selectedService, setSelectedService] = useState(initialService)
  const [selectedBarber, setSelectedBarber] = useState('Any Barber')

  const selectedPrice = useMemo(
    () => services.find((service) => service.name === selectedService)?.price ?? '$35',
    [selectedService],
  )

  return (
    <>
      <Navbar expand="lg" className="site-navbar booking-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-mark">
            <span className="brand-icon">FF</span>
            <span>FreshFade Studio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="booking-navbar" />
          <Navbar.Collapse id="booking-navbar">
            <Nav className="mx-auto gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/booking" active>
                Book
              </Nav.Link>
              <Nav.Link as={Link} to="/#visit">
                Location
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/booking" className="btn-book">
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="booking-page">
        <Container>
          <h1 className="booking-title">Book an Appointment</h1>

          <section className="booking-panel">
            <Row className="g-4">
              <Col lg={7}>
                <div className="booking-selector">
                  <h2>Choose Your Time</h2>

                  <div className="booking-group">
                    <p className="booking-label">Select Date</p>
                    <div className="date-grid">
                      {dates.map((date) => (
                        <Button
                          key={date}
                          type="button"
                          className="choice-button"
                          variant={date === selectedDate ? 'primary' : 'outline-primary'}
                          onClick={() => setSelectedDate(date)}
                        >
                          {date}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="booking-group">
                    <p className="booking-label">Select Time</p>
                    <div className="time-grid">
                      {times.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          className="choice-button"
                          variant={time === selectedTime ? 'primary' : 'outline-primary'}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={5}>
                <div className="booking-summary">
                  <h2>Summary</h2>
                  <dl>
                    <div>
                      <dt>Service</dt>
                      <dd>{selectedService}</dd>
                    </div>
                    <div>
                      <dt>Date</dt>
                      <dd>{selectedDate}</dd>
                    </div>
                    <div>
                      <dt>Time</dt>
                      <dd>{selectedTime}</dd>
                    </div>
                    <div>
                      <dt>Barber</dt>
                      <dd>{selectedBarber}</dd>
                    </div>
                    <div>
                      <dt>Price</dt>
                      <dd>{selectedPrice}</dd>
                    </div>
                  </dl>

                  <Form.Group className="booking-group mb-3">
                    <Form.Label className="booking-label">Select Service</Form.Label>
                    <Form.Select
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                    >
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="booking-group mb-0">
                    <Form.Label className="booking-label">Select Barber</Form.Label>
                    <Form.Select
                      value={selectedBarber}
                      onChange={(event) => setSelectedBarber(event.target.value)}
                    >
                      {barbers.map((barber) => (
                        <option key={barber} value={barber}>
                          {barber}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </Col>
            </Row>

            <Button type="button" className="btn-book booking-continue">
              Continue
            </Button>
          </section>
        </Container>
      </main>
    </>
  )
}

export default Booking
