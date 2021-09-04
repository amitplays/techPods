/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Col,
  Row,
  ListGroup,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import fbIcon from "../assets/fbIcon.png";
import fbIcon2 from "../assets/fbLogo.png";
import messIcon from "../assets/mesIcon2.png";
import instaIcon from "../assets/instaIcon.png";

export default function Footer() {
  return (
    <div>
      <div className="parentOfOneCard">
        <div className="footerCardStyles">
          <Row>
            <Col sm={6}>
              <h3>TechPods</h3>
              <p>Mentor for students, Recruiters for Employers</p>
              <Form xs={2}>
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Username
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Subscribe for updates"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col sm={6} className="footerLinks">
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    SHOP
                  </ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur</ListGroup.Item>
                </ListGroup>
              </div>
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    ABOUT
                  </ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur</ListGroup.Item>
                </ListGroup>
              </div>
              <div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="footerLinksFirstItem">
                    MORE
                  </ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <p className="footerLinksFirstItem">TechPods ALL RIGHTS RESERVED</p>
          </Row>
          <Row>
            <Col sm={6}>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul style={{ textAlign: "center", marginTop: "-15px" }}>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={fbIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={messIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={instaIcon}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{
                        maxWidth: "25px",
                      }}
                      src={fbIcon2}
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
