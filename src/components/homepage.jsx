import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Homepage = () => {
  return (
    <div>
      <img
  alt="Nyali Beach"
  src="../../image/Nyali-Beach.jpg"
  style={{
    width: '100%',
    height: '81vh',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
/>
      <Container className="mt-4" style={{textAlign: 'center' }}>
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

      <Container className="mt-4" style={{ textAlign: 'center' }}>
        <Row className="mt-4">
          <Col>
            <h2 style={{ marginBottom: '20px' }}>Reviews</h2>
            <div className="d-flex flex-wrap">
              <Card style={{ width: '22rem', margin: '10px'}}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    Amazing experience! The hotel's luxurious amenities and friendly staff made our stay unforgettable.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '22rem', margin: '10px'}}>
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>
                    We absolutely loved our time at this beautiful hotel. The attention to detail and comfort were outstanding.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '22rem', margin: '10px'}}>
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
        <a href="/all-reviews" style={{ color: '#888' }}>
                Read All Reviews
              </a>
      </Container>
    </div>
  )
}

export default Homepage