import { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import './Booking.css'

const services = [
  { name: 'Signature Cut', price: '$35' },
  { name: 'Fade & Lineup', price: '$42' },
  { name: 'Beard Trim', price: '$20' },
  { name: 'Kids Cut', price: '$28' },
  { name: 'Hot Towel Shave', price: '$30' },
  { name: 'Haircut & Beard', price: '$55' },
]

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const barbers = ['Jordan', 'Marcus', 'Taylor', 'Any Barber']

function formatMonth(date) {
  return date.toLocaleDateString('en-CA', {
    month: 'long',
    year: 'numeric',
  })
}

function formatSelectedDate(date) {
  return date.toLocaleDateString('en-CA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function buildCalendarDays(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const leadingBlankDays = firstDay.getDay()

  return [
    ...Array.from({ length: leadingBlankDays }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, month, index + 1)),
  ]
}

function buildTimeSlots() {
  const slots = []

  for (let hour = 9; hour <= 17; hour += 1) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 17 && minute > 0) {
        break
      }

      const period = hour >= 12 ? 'PM' : 'AM'
      const displayHour = hour > 12 ? hour - 12 : hour
      slots.push(`${displayHour}:${minute === 0 ? '00' : minute} ${period}`)
    }
  }

  return slots
}

function Booking() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service')
  const initialService = services.some((service) => service.name === requestedService)
    ? requestedService
    : services[0].name

  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState(() => new Date())
  const [selectedTime, setSelectedTime] = useState('9:00 AM')
  const [selectedService, setSelectedService] = useState(initialService)
  const [selectedBarber, setSelectedBarber] = useState('Any Barber')
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
  })

  const selectedPrice = useMemo(
    () => services.find((service) => service.name === selectedService)?.price ?? '$35',
    [selectedService],
  )
  const calendarDays = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth])
  const timeSlots = useMemo(() => buildTimeSlots(), [])
  const selectedDateLabel = formatSelectedDate(selectedDate)

  function changeMonth(offset) {
    const nextMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1)
    setVisibleMonth(nextMonth)
    setSelectedDate(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1))
  }

  function handleCustomerChange(event) {
    const { name, value } = event.target
    setCustomerDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const confirmationPath = `/confirmation?${new URLSearchParams({
      service: selectedService,
      date: selectedDateLabel,
      time: selectedTime,
      barber: selectedBarber,
      price: selectedPrice,
      location: '123 Barber Street, Ottawa, ON',
      ...customerDetails,
    }).toString()}`

    navigate(confirmationPath)
  }

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
            <Nav className="ms-lg-auto me-lg-3 gap-lg-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/booking" active>
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

      <main className="booking-page">
        <Container>
          <h1 className="booking-title">Book an Appointment</h1>

          <Form className="booking-panel" onSubmit={handleSubmit}>
            <Row className="g-4">
              <Col xl={8} lg={7}>
                <div className="booking-selector">
                  <h2>Choose Your Time</h2>

                  <div className="appointment-options">
                    <Form.Group className="booking-group">
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

                    <Form.Group className="booking-group">
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

                  <div className="booking-group">
                    <p className="booking-label">Select Month and Day</p>
                    <div className="calendar-picker">
                      <div className="calendar-header">
                        <Button
                          type="button"
                          variant="outline-primary"
                          className="calendar-nav"
                          onClick={() => changeMonth(-1)}
                          aria-label="Previous month"
                        >
                          &lt;
                        </Button>
                        <h3>{formatMonth(visibleMonth)}</h3>
                        <Button
                          type="button"
                          variant="outline-primary"
                          className="calendar-nav"
                          onClick={() => changeMonth(1)}
                          aria-label="Next month"
                        >
                          &gt;
                        </Button>
                      </div>
                      <div className="weekday-grid">
                        {weekdays.map((weekday) => (
                          <span key={weekday}>{weekday}</span>
                        ))}
                      </div>
                      <div className="calendar-grid">
                        {calendarDays.map((date, index) => (
                          date ? (
                            <Button
                              key={date.toISOString()}
                              type="button"
                              className="calendar-day"
                              variant={
                                date.toDateString() === selectedDate.toDateString()
                                  ? 'primary'
                                  : 'outline-primary'
                              }
                              onClick={() => setSelectedDate(date)}
                            >
                              {date.getDate()}
                            </Button>
                          ) : (
                            <span className="calendar-empty" key={`empty-${index}`} />
                          )
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="booking-group">
                    <p className="booking-label">Select Time</p>
                    <div className="time-grid">
                      {timeSlots.map((time) => (
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

              <Col xl={4} lg={5}>
                <div className="customer-details">
                  <h2>Your Details</h2>
                  <Row className="g-3">
                    <Col md={6} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={customerDetails.firstName}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={customerDetails.lastName}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={customerDetails.email}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={customerDetails.phone}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={8} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={customerDetails.address}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} lg={12}>
                      <Form.Group>
                        <Form.Label className="booking-label">Postal Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="postalCode"
                          value={customerDetails.postalCode}
                          onChange={handleCustomerChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="booking-summary">
                  <h2>Summary</h2>
                  <dl>
                    <div>
                      <dt>Service</dt>
                      <dd>{selectedService}</dd>
                    </div>
                    <div>
                      <dt>Date</dt>
                      <dd>{selectedDateLabel}</dd>
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
                </div>
              </Col>
            </Row>

            <Button type="submit" className="btn-book booking-continue">
              Continue
            </Button>
          </Form>
        </Container>
      </main>
    </>
  )
}

export default Booking
