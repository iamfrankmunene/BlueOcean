import React, { useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
import { useDispatch } from 'react-redux'
import { toggleDescription } from '../store/features/cardFlipSlice'

const experiences = [
    { name: "Massage Paradise", description: "Relax and rejuvenate at Massage Paradise, where skilled therapists offer a range of soothing massages to pamper your body and soul. Escape into a world of tranquility and leave your worries behind." },
    { name: "Aquatic Thrills", description: "Embark on thrilling water adventures with Aquatic Thrills. From jet skiing to paddleboarding, experience the excitement of various water sports activities that cater to both beginners and seasoned enthusiasts." },
    { name: "Deep Blue Discovery", description: "Dive into the depths of the ocean with Deep Blue Discovery. Our professional guides will take you on an unforgettable deep-sea diving experience, allowing you to explore vibrant marine life and stunning underwater landscapes." },
    { name: "Yacht Escapade", description: "Sail away on a luxurious Yacht Escapade, where opulence meets the open sea. Enjoy a private yachting experience with breathtaking views, personalized service, and the freedom to chart your course." },
    { name: "Shimba Hills Safari", description: "Embark on a safari adventure to Shimba Hills, where the untamed beauty of nature unfolds before your eyes. Witness diverse wildlife, breathtaking landscapes, and experience the thrill of an authentic African safari." },
    { name: "Crystal Oasis", description: "Take a refreshing dip in the Crystal Oasis Pool, surrounded by lush greenery and a tranquil atmosphere. Whether you're swimming for fitness or relaxation, our pool offers the perfect retreat." },
    { name: "Community Connections", description: "Immerse yourself in the local culture with Community Connections. Join guided visits to nearby communities, interact with locals, and gain a deeper understanding of the rich traditions and heritage of the region." },
    { name: "Zen Gym", description: "Revitalize your body and mind at the Zen Gym. Our state-of-the-art facility offers fitness enthusiasts a range of equipment and expert instructors to guide you through invigorating workouts." },
    { name: "Beach Bliss", description: "Engage in friendly competition with Beach Bliss. Gather your friends and enjoy beach volleyball, a perfect blend of sun, sand, and exciting games that will add a touch of joy to your seaside retreat." },
  ]

const Activity = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const dispatch = useDispatch()

  // flip the card when the user clicks on it
  const handleCardClick = (index) => {
    setFlippedIndex(index)
    dispatch(toggleDescription()) 
  }

  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={3} className="g-2">
        {experiences.map((activity, index) => (
          <Col key={index} className="mb-3">
            <ReactCardFlip
              isFlipped={flippedIndex === index}
              flipDirection="vertical"
            >
              {/* Front facing card */}
              <Card
                onClick={() => handleCardClick(index)}
                style={{ width: '100%', height: '100%', border: 'none' }}
              >
                <Card.Img
                  variant="top"
                  src={`../../image/${activity.name.replace(/\s+/g, '')}.jpg`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{activity.name}</Card.Title>
                </Card.Body>
              </Card>

              {/* Back facing card */}
              <Card onClick={() => handleCardClick(index)} 
                    style={{ width: '100%', height: '100%', border: 'none', textAlign: 'center' }}>
                <Card.Body>
                  <Card.Text>{activity.description}</Card.Text>
                  <div className="d-flex flex-column align-items-center">
                    <Button
                      variant="link"
                      href="/book"
                      style={{ color: 'red', fontSize: 'larger', textDecoration: 'none' }}
                    >
                    Join The Fun
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </ReactCardFlip>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Activity
