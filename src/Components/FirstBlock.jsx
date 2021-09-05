import React from "react";
import Slide from "react-reveal/Slide";
import speed from "../assets/test.png";
import resume from "../assets/resume.png";
import recruit from "../assets/recrui.png";

import { Button, Carousel, Row, Col } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="cardStyles fullWidthHomeCard">
          <Carousel pause="hover" indicators={false} controls={false}>
            {/* ----------------- FIRST ITEM ----------------- */}
            <Carousel.Item className="mainCarousel" interval={2000}>
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
            <Carousel.Item interval={1000}>
              <Carousel.Caption>
                <h1>Open Doors With Industry Connections</h1>
                <p>
                  Tap into GA’s growing global network of tech experts,
                  instructors, hiring partners, and alumni, and equip yourself
                  to succeed in a rapidly expanding field.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* ----------------- THIRD ITEM ----------------- */}

            <Carousel.Item interval={1000}>
              <Carousel.Caption>
                <h1> Build a Professional-Grade Portfolio </h1>
                <p>
                  Showcase your coding and collaboration skills to potential
                  employers, creating full-stack web applications that leverage
                  modern programming languages, frameworks, and tools.
                </p>
              </Carousel.Caption>
              <div className="buttonWrapperCarousel">
                {/* <Button
                  className="justify-content-end"
                  variant="outline-light"
                  size="sm"
                >
                  Enroll Now
                </Button> */}
              </div>
              <div className="fullWidth-image-container">
                <img src={resume} alt="speed" className="CardImages" />
              </div>
            </Carousel.Item>

            {/* ----------------- FOURTH ITEM ----------------- */}
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h1>Get Personalized Job Support at Every Step</h1>
                <p>
                  Build confidence with mock technical interview preparation and
                  whiteboard challenges, get connected with top employers, and
                  navigate your job search from end-to-end with a dedicated
                  career coach.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Second Row */}
      <div className="parentOfTwoCards">
        <Slide bottom>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
            <img src={speed} alt="speed" className="CardImages" />
            <div className="buttonGroup">
              {/* <Button size="sm" className="linkButton" variant="dark">
                Learn More
              </Button> */}
            </div>
          </div>
        </Slide>
        <Slide bottom>
          <div className="cardStyles cardTwoOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
          </div>
        </Slide>
      </div>

      {/* Third Row */}
      <div className="parentOfTwoCards">
        <Slide bottom>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
          </div>
        </Slide>
        <Slide bottom>
          <div className="cardStyles cardTwoOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
          </div>
        </Slide>
      </div>

      <div className="parentOfTwoCards">
        <Slide bottom>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
            <img src={speed} alt="speed" className="CardImages" />
          </div>
        </Slide>
        <Slide bottom>
          <div className="cardStyles cardTwoOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
          </div>
        </Slide>
      </div>
    </>
  );
}
