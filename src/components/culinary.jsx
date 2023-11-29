import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDescription, selectRestaurantsFlip } from '../store/features/cardFlipSlice.js';

const Culinary = () => {
  const dispatch = useDispatch()
  const restaurantsData = useSelector(selectRestaurantsFlip)
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
    dispatch(toggleDescription({ cardIndex: index })); // flip the card when clicked
  };

  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={3} className="g-2">
      {restaurantsData && restaurantsData.map((restaurant, index) => {
  return (
   <Col key={index} className="mb-3">
      <ReactCardFlip
        isFlipped={flippedIndex === index}
        flipDirection="vertical"
      >
        {/* Front facing card */}
        <Card
          onClick={() => handleCardClick(index)}
          style={{ width: '100%', height: '100%', border: 'none', boxShadow: '4px 2px 30px rgba(144, 238, 144, 0.5)' }}
          data-testid={`culinary-front-card-${index}`}
        >
          <Card.Img
            variant="top"
            alt={restaurant.name}
            src={`../../image/${restaurant.name.replace(/\s+/g, '')}.jpg`}
            style={{ width: '100%', height: '45vh', objectFit: 'cover' }}
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
                style={{ color: 'red', fontSize: 'larger', textDecoration: 'none' }}
              >
                {restaurant.contacts}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </Col>
   )
    })}
      </Row>
    </Container>
  );
};


export default Culinary;
