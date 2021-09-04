import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

export default function Header() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="headerStyles">
      <Navbar
        className="navBarStyles ml-auto"
        sticky="top"
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
      >
        <Container className="navBarContainer">
          <Navbar.Brand href="/">TechPods</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav.Link as={Link} to={"./recruiter"} eventKey={2}>
            <Button size="sm" variant="outline-dark">
              Recruiters
            </Button>
          </Nav.Link>

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Link
                // onClick={contactUs}
                as={Link}
                to={"./ContactUs"}
                eventKey={2}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={"./faqs"} eventKey={2}>
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to={"./workshops"} eventKey={3}>
                Workshops
              </Nav.Link>
              <Nav.Link as={Link} to={"./certifications"} eventKey={4}>
                Certifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
