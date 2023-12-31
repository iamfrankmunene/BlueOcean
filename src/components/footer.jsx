import React from 'react'
import { Button,Container, Row, Col } from 'react-bootstrap'

const Footer = (BookNow) => {
  return (
    <div>
    <footer style={{ backgroundColor: '#3c2d20', color: 'white', marginTop:'60px',position: 'relative', top: '-40px' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={3} md={3} className="text-md-right mb-3 mb-md-0 mt-3 mt-md-0">
            <img
              alt="BlueOcean Logo"
              src="../image/BlueOcean-logo.jpg"
              width="75"
              height="75"
              className="d-inline-block align-top"
            />
          </Col>
          <Col xs={9} md={5} className="text-right text-md-left">
            <p>Email: BlueOcean@hotel.com</p>
            <p>Mombasa, Kenya</p>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-center">
            {/* Map location Nyali Beach */}
            <iframe
              title="Nyali Beach Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.124778227616!2d39.716380114274834!3d-4.044209397054005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a48aee7a5359f%3A0xfb8f6f71c834c933!2sNyali%20Beach%2C%20Mombasa%2C%20Kenya!5e0!3m2!1sen!2s!4v1671992701677!5m2!1sen!2s"
              width="100%"
              height="80"
              style={{ border: 0, marginTop: '5px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </footer>
   {BookNow && <Button href="/bookings" style={{ backgroundColor: '#B30B11', position: 'fixed', bottom: '0px', zIndex: '1000', width:'100%', height:'40px',borderRadius: '0px' }}>
    Book Now
  </Button>}
  </div>
  )
}

export default Footer