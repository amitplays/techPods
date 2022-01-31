import React from "react";
import {
  Button,
  Alert,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import { StudentForm, EmployerForm } from "./StudentForm";
import faq2 from "../assets/contact.png";
import Fade from "react-reveal/Slide";
import fbIcon2 from "../assets/fbLogo.png";
import messIcon from "../assets/mesIcon2.png";
import instaIcon from "../assets/instaIcon.png";

export default function ContactUs() {
  return (
    <>
      <div className="contactUsBody">
        <div className="parentOfOneCard">
          <div className="cardStyles fullWidthHomeCard">
            <Row>
              <Col sm={7}>
                <Fade left>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <h1>Contact Us</h1>
                    <h3>
                      Learn about software development and it's basics. Connect
                      with us and get our latest updates !
                    </h3>
                    <div>
                      <div style={{ marginTop: "45px" }}>
                        <ul style={{ textAlign: "center", marginTop: "15px" }}>
                          <li>
                            <a href="#">
                              <img
                                style={{
                                  maxWidth: "45px",
                                }}
                                src={messIcon}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                style={{
                                  maxWidth: "45px",
                                }}
                                src={instaIcon}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                style={{
                                  maxWidth: "45px",
                                }}
                                src={fbIcon2}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col sm={5}>
                <Fade right>
                  <div
                    style={{
                      display: "block",
                      margin: "auto",
                      maxWidth: "300px",
                      paddingTop: "10px",
                    }}
                  >
                    <img src={faq2} alt="speed" className="CardImages" />
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </div>
        <Fade bottom>
          <Tabs
            defaultActiveKey="Experienced"
            id="uncontrolled-tab-example"
            className="mb-3 ContactTabStyle"
            variant="pills"
          >
            {/* -------- Student Tab ------- */}
            <Tab eventKey="Experienced" title="Experienced">
              <div className="parentOfOneCard">
                <div className="cardStyles fullWidthContactCard">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div className="Illustration">
                      <h3>Student Illustration</h3>
                    </div>
                    <div className="formParent">
                      <StudentForm />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            {/* -------- Employer Tab ------- */}
            <Tab eventKey="Freshers" title="Freshers">
              <div className="parentOfOneCard">
                <div className="empContactUsCard fullWidthContactCard">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div className="formParent">
                      <EmployerForm />
                    </div>
                    <div className="Illustration">
                      <h3>Employer Illustration</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Fade>
      </div>
    </>
  );
}
