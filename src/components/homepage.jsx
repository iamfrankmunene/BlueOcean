import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const Homepage = () => {
  return (
    <div>
      <img
  alt="Nyali Beach"
  src="../../image/NyaliBeach.jpg"
  style={{
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
/>

      <Container className="mt-4">
        <Row>
          <Col>
            <h2 style={{ marginBottom: '20px' }}>About Us</h2>
            <p>
              Nestled along the stunning Kenyan Coast, our five-star hotel is a beacon of luxury and relaxation. With a rich history dating back to the early days of coastal tourism, our hotel has played a pivotal role in shaping the region's hospitality landscape.
            </p>
            <p>
              Immerse yourself in the opulence of our meticulously designed rooms, indulge in the culinary delights of our world-class restaurant, and experience unparalleled service from our dedicated staff. Our commitment to excellence ensures that every moment of your stay is nothing short of extraordinary.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row className="mt-4">
          <Col>
            <h2 style={{ marginBottom: '20px' }}>Reviews</h2>
            <div className="d-flex flex-wrap">
              <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#20c997', color: 'white' }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    Amazing experience! The hotel's luxurious amenities and friendly staff made our stay unforgettable.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#20c997', color: 'white' }}>
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>
                    We absolutely loved our time at this beautiful hotel. The attention to detail and comfort were outstanding.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#20c997', color: 'white' }}>
                <Card.Body>
                  <Card.Title>Mark Johnson</Card.Title>
                  <Card.Text>
                    Exceptional service and attention to guest satisfaction. The ambiance and amenities exceeded our expectations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <Button style={{ backgroundColor: '#B30B11', position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
        Book Now
      </Button>
    </div>
  )
}

export default Homepage
