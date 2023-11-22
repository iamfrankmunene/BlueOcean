import React, { useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
import { useDispatch } from 'react-redux'
import { toggleDescription } from '../store/features/cardFlipSlice'

const restaurants = [
  { name: "Sandy Sips", description: "Indulge in a tropical paradise at Sandy Sips, where refreshing drinks meet a laid-back atmosphere right by the beach. Let the soothing sounds of waves accompany your dining experience as you unwind in a coastal haven." },
  { name: "Safari Bites", description: "Embark on a culinary journey at Safari Bites, where the rich flavors and cultural diversity of African cuisine come to life. Immerse yourself in the vibrant spices and traditional dishes that tell a story of the continent's culinary heritage." },
  { name: "Frosty Delights", description: "Chill out with Frosty Delights, a haven for cold snacks perfect for hot days. From gourmet ice creams to frosty treats, this spot is a cool retreat for those seeking a delightful escape from the heat." },
  { name: "Kid Kingdom", description: "Step into the Kid Kingdom, a family-friendly restaurant designed for young adventurers. With fun activities for kids and a menu crafted to delight young palates, it's the perfect place for families to create lasting memories together." },
  { name: "Aqua Eats", description: "Dine on water at Aqua Eats, a unique culinary experience set on a floating restaurant. Enjoy the gentle sway of the waves beneath you as you savor delicious dishes in a setting that combines elegance with the tranquility of the sea." },
  { name: "Savory Hearts", description: "Romance your taste buds at Savory Hearts, where delicious meals unfold in a romantic setting. Whether it's an intimate dinner for two or a celebration of love, this restaurant promises a culinary experience as enchanting as the setting." },
]

const Culinary = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const dispatch = useDispatch()

  const handleCardClick = (index) => {
    setFlippedIndex(index)
    dispatch(toggleDescription()) // flip the card when the user clicks on it
  }

  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={3} className="g-2">
        {restaurants.map((restaurant, index) => (
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
                  src={`../../image/${restaurant.name.replace(/\s+/g, '')}.jpg`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                </Card.Body>
              </Card>

              {/* Back facing card */}
              <Card onClick={() => handleCardClick(index)} style={{ width: '100%', height: '100%', border: 'none', textAlign: 'center' }}>
                <Card.Body>
                  <Card.Text>{restaurant.description}</Card.Text>
                  <div className="d-flex flex-column align-items-center">
                    <Button
                      variant="link"
                      href="/menu"
                      style={{ color: 'red', fontSize: 'larger', textDecoration: 'none' }}
                    >
                      View Menu
                    </Button>
                    <Button
                      variant="link"
                      href="/book"
                      style={{ color: 'red', fontSize: 'larger', textDecoration: 'none' }}
                    >
                      Book A Table
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

export default Culinary
