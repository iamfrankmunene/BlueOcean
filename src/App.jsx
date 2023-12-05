import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Homepage from './components/homepage'
import Rooms from './components/rooms.jsx'
import Culinary from './components/culinary.jsx'
import Experiences from './components/experiences.jsx'
import Bookings from './components/bookings.jsx'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/culinary" element={<Culinary />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
