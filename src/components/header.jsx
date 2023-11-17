import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectMenuOpen, toggleMenu } from '../store/features/navSlice'

const Header = () => {
  const menuOpen = useSelector(selectMenuOpen)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleMenu())
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
          {menuOpen ? (
            <span style={{ fontSize: '1.25rem', color: '#fff' }}>&times</span> // X icon when menu is open
          ) : (
            <span className="navbar-toggler-icon" /> // Hamburger icon when menu is closed
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className={`justify-content-end ${menuOpen ? 'show' : ''}`}>
          <Nav>
            <Nav.Link href="/rooms">Rooms</Nav.Link>
            <Nav.Link href="/restaurant">Restaurant</Nav.Link>
            <NavDropdown title="Facilities" id="basic-nav-dropdown">
              <NavDropdown.Item>Swimming</NavDropdown.Item>
              <NavDropdown.Item>Water Sports</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
