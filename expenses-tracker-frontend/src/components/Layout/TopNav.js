import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const TopNav = () => {
  return (
    <Navbar bg="warning" expand="md">
  <Container>
    <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <LinkContainer to="/" className="hasColoredText">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        <LinkContainer to="/register" className="hasColoredText">
          <Nav.Link>
            Register
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
