import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { selectRoomData } from '../store/features/roomSlice.js';

const Rooms = () => {
  const roomData = useSelector(selectRoomData);

  return (
    <Container className="mt-4">
      {roomData.map((room, index) => (
        <Row key={index} className={`mb-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <Col md={6}>
            <Image src={room.photo} alt={room.name} fluid />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="text-center text-md-start">
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <p className="font-weight-bold">Price: ${room.price} per night</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Rooms;
