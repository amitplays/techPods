import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="headerStyles">
      <Navbar
        className="navBarStyles"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">TechPods</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
