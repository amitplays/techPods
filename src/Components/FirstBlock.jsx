import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import grow from "../assets/grow.png";
import resume from "../assets/resume.png";
import stu from "../assets/ofc.jpg";
import code from "../assets/cardImageStu.jpg";

import { Button, Badge, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
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
                  <h1>Learn the key skills to accelerate your career</h1>
                  <h4>
                    Our workshops are the pre-requists for aspiring Software
                    Developer and Computer Programmer. <br />
                  </h4>
                  <h4>
                    Understand the Software development process, lifecycle of
                    software from the requirements to the maintenance.
                  </h4>
                  <Button variant="light" className="ctaButton">
                    Find Workshops
                  </Button>
                  <div>
                    <div style={{ marginTop: "45px" }}></div>
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
                  }}
                >
                  <img src={grow} alt="speed" className="CardImages" />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
      {/* Second Row ------------------------------- */}
      <Row>
        {" "}
        <Col>
          {" "}
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <h2 className="subsCardHeading">Become a Bit Master</h2>
              <p>
                Stand out from peers with BitMaster skill certifications to
                build a strong technical profile. We’ve crafted our own
                curriculum and designed innovative certifications to bring
                high-demand skills to new developers. Get connected with top
                employers from our wide recruiter network.
              </p>
              <Button variant="success" href={"./certifications"}>
                Enroll Now
              </Button>
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
              <h2 className="subsCardHeading">Create your Bit Profile</h2>
              <p>
                With Bit Recruiter’s tech profile builder, you’ll have
                everything you need to craft a professional profile that will
                let your hard work speak for itself. Build An Effective And
                Efficient technical profile and learn the key skills to
                accelerate your career and Climb The Corporate Ladder.
              </p>
              <Button variant="success">start Now</Button>
            </div>
          </Fade>
        </Col>
        <Col>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <h2 className="subsCardHeading">Attend a Bit Workshop </h2>
              <p>
                Leverage our dedicated courses and workshops to learn the most
                sought after technologies, frameworks and tools.
                <br /> Our workshops are designed to help students make an
                unforgettable impression on the leading technology and Design
                employers.
              </p>
              <Button variant="success">Enroll Now</Button>
            </div>
          </Fade>
        </Col>
      </Row>
      {/* ---------------- What we Do ?  ---------------------- */}
      <div className="whoWeAre">
        <Row>
          <Col>
            <Slide bottom>
              <div>{/* ILLUSTRATION GOES HERE */}</div>
            </Slide>
          </Col>
          <Col xs={8}>
            <h1 className="cardHeading">What we do ?</h1>
            <p>
              Leverage our dedicated courses and workshops to learn the most
              sought after technologies, frameworks and tools.Our workshops are
              designed to help students make an unforgettable impression on the
              leading technology and Design employers.
            </p>
          </Col>
        </Row>
      </div>
      {/* ---------------- Career Counsellor  ---------------------- */}
      <Row>
        <Col>
          <Slide bottom>
            <div
              style={{
                backgroundColor: "#fcecda",
                // backgroundImage:"linear-gradient(rgb(65 0 0 / 82%), rgb(64 0 0))",
              }}
              className="cardStyles fullWidthHomeCard"
            >
              <h1 className="cardHeading">Career Cousellor</h1>
              <p>
                Leverage our dedicated courses and workshops to learn the most
                sought after technologies, frameworks and tools.
                <br /> Our workshops are designed to help students make an
                unforgettable impression on the leading technology and Design
                employers.
              </p>
              <div className="buttonWrapperCarousel">
                <Button
                  className="justify-content-end"
                  variant="light"
                  size="sm"
                >
                  Contact Now
                </Button>
              </div>
              {/* <img src={speed} alt="speed" className="CardImages" /> */}
            </div>
          </Slide>
        </Col>
      </Row>
    </>
  );
}
