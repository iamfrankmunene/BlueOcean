import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Bookings = ({ onBook }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleBook = () => {
    onBook(date, time)
  }

  return (
    <div>
      <h3>Room Booking Form</h3>
      <Form>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleBook}>Book Room</Button>
      </Form>
    </div>
  )
}

export default Bookings
