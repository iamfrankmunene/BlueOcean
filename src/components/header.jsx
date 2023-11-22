import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectNavOpen, toggleNav } from '../store/features/navSlice'
import { selectRoomVisibility, toggleRooms } from '../store/features/roomsVisibilitySlice'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navOpen = useSelector(selectNavOpen)
  const roomVisibility = useSelector(selectRoomVisibility)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleNav())
  }

  const handleClickRooms = () => {
    dispatch(toggleRooms())
  }

  return (
    <Navbar style={{ background: 'linear-gradient(to right, #00bcd4, #0072c6)' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="BlueOcean Logo"
            src="../image/BlueOcean-logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            style={{ margin: '0px', padding: '0px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleClick}>
          {navOpen ? (
            <span style={{ fontSize: '1.25rem', color: '#fff' }}>X</span> // X icon when menu is open
          ) : (
            <span className="navbar-toggler-icon" /> // Hamburger icon when menu is closed
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className={`justify-content-end ${navOpen ? 'show' : ''}`}>
          <Nav>
            <NavLink
              onClick={handleClickRooms}
              to="/rooms"
              style={{
    color: '#eceff1',
    textDecoration: 'none',
    marginRight: '20px'
  }}
            >
              Rooms
            </NavLink>
            <NavLink
              to="/culinary"
              style={{
    color: '#eceff1',
    textDecoration: 'none',
    marginRight: '20px'
  }}
            >
              Culinary
            </NavLink>
            <NavLink
              to="/experiences"
              style={{
    color: '#eceff1',
    textDecoration: 'none',
    marginRight: '20px'
  }}
            >
              experiences
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
