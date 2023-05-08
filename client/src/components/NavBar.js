import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {

    return(
        <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style = {{color: "white"}}>HSL City Bikes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style = {{color: "white"}}>Journeys</Nav.Link>
            <Nav.Link href="/stations"style = {{color: "white"}} >Stations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar