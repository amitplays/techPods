import { Button, Badge, Alert, Col, Row } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import workBanner from "../assets/workBanner.png";

export default function Workshops() {
  return (
    <div>
      <div className="workshopsBody">
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
                    <h1 style={{ textAlign: "left" }}>Bit Workshops</h1>
                    <h4 className="headingSubtext">
                      Our events and workshops focus on software development
                      concepts, experiential learning and skill-building. We
                      offer programs for undergraduate and graduate students,
                      from learning about possible career paths to preparing to
                      apply for jobs and internships as a software developer.
                    </h4>
                    <Button variant="light" className="ctaButton">
                      Find Workshops
                    </Button>
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
                      paddingTop: "20px",
                    }}
                  >
                    <img src={workBanner} className="CardImages"></img>
                  </div>
                </Fade>
              </Col>
            </Row>
            {/* Second Row ------------------------------- */}
          </div>
        </div>
        <Row>
          <Col>
            {" "}
            <Fade bottom>
              <div className="fourCardStyle cardFixedHeight">
                <h4 className="subsCardHeading">
                  Developer Workshop{" "}
                  <Badge pill bg="dark">
                    Level 1
                  </Badge>
                </h4>
                <p>
                  This workshop would entail the basics of software development
                  which is a must for every aspiring software developer. This
                  includes students who are not specifically studying Computer
                  Science and wants to understand how software development works
                  and what are the essentials that one should know being a
                  software developer.
                </p>
                <Button variant="success">Enroll Now</Button>
              </div>
            </Fade>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
            }}
            xs={6}
          >
            {" "}
            <Fade bottom>
              <div className="fourCardStyle cardFixedHeight">
                <h4 className="subsCardHeading">
                  Developer Workshop{" "}
                  <Badge pill bg="dark">
                    Level 2
                  </Badge>
                </h4>
                <p>
                  This workshop can be attended after level 1 and explains about
                  the different programming languages , their approach and ways
                  to study. This workshop will also help students to understand
                  the different types of database and how application consumes
                  database. This workshop will also help students understand
                  security around software development.
                </p>
                <Button variant="success">Enroll Now</Button>
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade bottom>
              <div className="fourCardStyle cardFixedHeight">
                <h4 className="subsCardHeading">
                  Applications Using React.js{" "}
                  <Badge pill bg="dark">
                    Level 3
                  </Badge>
                </h4>
                <p>
                  This workshop would combine the Level 1 and Level 2 workshops
                  and will introduce students of how to start building realtime
                  web-applications. This workshop can be divided into building a
                  dynamic application that deal with realtime APIs and front end
                  development using React.js.
                </p>
                <Button variant="success">Enroll Now</Button>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      <Row
        style={{
          marginTop: 100,
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Fade left>
            <div
              style={{
                backgroundColor: "#ac5e00",
                color: "#fff",
              }}
              className="fourCardStyle cardFixedHeight"
            >
              <h4 className="subsCardHeading">Attend a Workshop </h4>
              <ul style={{ textAlign: "left" }}>
                <li>3 Level Workshops</li>
                <li>Real Life Projects</li>
                <li>Regular Feedback</li>
              </ul>
              <Button className="fullWidthButton" variant="success">
                Enroll Now
              </Button>
            </div>
          </Fade>
        </Col>
        <Col md={7}>
          <Fade right>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h1>Who should Enroll ?</h1>
              <h4 className="headingSubtext">
                If you to learn programming and wondering what are some of the
                most basic things every software developer or programmer should
                learn or know, then, here is a list of some of the fundamental
                things you can learn to do well as a programmer.
              </h4>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}
