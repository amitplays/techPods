import React from "react";
import Slide from "react-reveal/Slide";
import speed from "../assets/test.png";
import resume from "../assets/resume.png";
import stu from "../assets/laptopDesign.jpg";
import code from "../assets/coding.jpg";

import { Button, Carousel, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="homePageCardStyles fullWidthHomeCard">
          <Carousel pause="hover" indicators={false} controls={false}>
            {/* ----------------- FIRST ITEM ----------------- */}
            <Carousel.Item className="mainCarousel" interval={3000}>
              <Row>
                <Col sm={8}>
                  <div>
                    <Carousel.Caption>
                      <h1>Launch a Fulfilling, Future-Proof Career</h1>
                      <p>
                        Become invaluable in our tech-driven world. Meet the
                        global demand for problem-solvers with strong technical
                        foundations and the agility to keep learning.
                      </p>
                    </Carousel.Caption>
                  </div>
                </Col>
                <Col sm={4}>
                  <div style={{ display: "contents" }}>
                    <img src={resume} alt="speed" className="CardImages" />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

            {/* ----------------- SECOND ITEM ----------------- */}
            <Carousel.Item interval={3000}>
              <Row>
                <Col sm={8}>
                  <div>
                    <Carousel.Caption>
                      <h1>Open Doors With Industry Connections</h1>
                      <p>
                        Tap into GA’s growing global network of tech experts,
                        instructors, hiring partners, and alumni, and equip
                        yourself to succeed in a rapidly expanding field.
                      </p>
                    </Carousel.Caption>
                  </div>
                </Col>
                <Col sm={4}>
                  <div style={{ display: "contents" }}>
                    <img src={resume} alt="speed" className="CardImages" />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            {/* ----------------- THIRD ITEM ----------------- */}

            <Carousel.Item interval={3000}>
              <Carousel.Caption>
                <Row>
                  <Col sm={8}>
                    <div>
                      <Carousel.Caption>
                        <h1> Build a Professional-Grade Portfolio </h1>
                        <p>
                          Showcase your coding and design skills to employers,
                          creating full-stack web applications that leverage
                          modern programming languages, frameworks, and tools.
                        </p>
                      </Carousel.Caption>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div style={{ display: "contents" }}>
                      <img src={resume} alt="speed" className="CardImages" />
                    </div>
                  </Col>
                </Row>
              </Carousel.Caption>
              {/* <div className="buttonWrapperCarousel">
                <Button
                  className="justify-content-end"
                  variant="outline-light"
                  size="sm"
                >
                  Enroll Now
                </Button>
              </div> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Second Row */}
      <div className="parentOfTwoCards">
        <Row>
          <Col>
            <Slide bottom>
              <div className="cardStyles cardOneOfTwo">
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide bottom>
              <div
                style={{ backgroundImage: `url(${stu})` }}
                className="cardStyles cardTwoOfTwo"
              >
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
              </div>
            </Slide>
          </Col>
        </Row>
      </div>

      {/* Third Row */}

      <div className="parentOfTwoCards">
        <Row>
          <Col>
            <Slide bottom>
              <div
                style={{ backgroundImage: `url(${code})` }}
                className="cardStyles cardTwoOfTwo"
              >
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide bottom>
              <div className="cardStyles cardOneOfTwo">
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
                {/* <img src={speed} alt="speed" className="CardImages" /> */}
              </div>
            </Slide>
          </Col>
        </Row>
      </div>

      <div className="parentOfTwoCards">
        <Row>
          <Col>
            <Slide bottom>
              <div className="cardStyles cardOneOfTwo">
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
                {/* <img src={speed} alt="speed" className="CardImages" /> */}
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide bottom>
              <div className="cardStyles cardTwoOfTwo">
                <h1 className="cardHeading">Go to the Next Level</h1>
                <p>
                  Train to Silicon Valley standards for roles in software
                  engineering, full stack development, and more.
                </p>
              </div>
            </Slide>
          </Col>
        </Row>
      </div>
    </>
  );
}
