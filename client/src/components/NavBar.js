import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./navbar.css"

const NavBar = () => {

    return(
      <Navbar style= {{position:"fixed", top: 0, left: 0, right: 0, zIndex: 9999}} className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style = {{color: "white", fontFamily: 'Gotham Rounded, sans-serif'}}>HSL City Bikes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style = {{color: "white", fontFamily: 'Gotham Rounded, sans-serif'}}>Journeys</Nav.Link>
              <Nav.Link href="/stations"style = {{color: "white", fontFamily: 'Gotham Rounded, sans-serif' }} >Stations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar