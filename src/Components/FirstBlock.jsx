import React from "react";
import Slide from "react-reveal/Slide";
import speed from "../assets/test.png";
import { Button, Carousel } from "react-bootstrap";

export default function FirstBlock() {
  return (
    <>
      {/* First Row */}
      <div className="parentOfOneCard">
        <div className="cardStyles fullWidthHomeCard">
          <Carousel pause="hover" indicators={false} controls={false}>
            {/* ----------------- FIRST ITEM ----------------- */}
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h3>ASPIRING SOFTWARE DEVELOPERS</h3>
                <p>
                  Learn the process and skills that sets software developer
                  apart from others.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* ----------------- SECOND ITEM ----------------- */}
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h3>ENGG. STUDENTS & GRADS</h3>
                <p>
                  See how software developer happens in the real world and learn
                  and build out your own web apps.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* ----------------- THIRD ITEM ----------------- */}

            <Carousel.Item interval={9000}>
              <Carousel.Caption>
                <h3> Mentors for Students & Staffing partner for Employers </h3>
                <img src={speed} alt="speed" className="CardImages" />
                <p>
                  You'll come away from this course able to create more
                  thoughtful, sophisticated solutions as a software developer.
                </p>
              </Carousel.Caption>
              <div className="buttonWrapperCarousel">
                <Button
                  className="justify-content-end"
                  variant="outline-light"
                  size="sm"
                >
                  Enroll Now
                </Button>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Second Row */}
      <div className="parentOfTwoCards">
        <Slide left>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
            <img src={speed} alt="speed" className="CardImages" />
            <div className="buttonGroup">
              <Button size="sm" className="linkButton" variant="dark">
                Learn More
              </Button>
            </div>
          </div>
        </Slide>
        <Slide right>
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
        <Slide left>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
          </div>
        </Slide>
        <Slide right>
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
        <Slide left>
          <div className="cardStyles cardOneOfTwo">
            <h2 className="cardHeading">Go to the Next Level</h2>
            <p>
              Train to Silicon Valley standards for roles in software
              engineering, full stack development, and more.
            </p>
            <img src={speed} alt="speed" className="CardImages" />
          </div>
        </Slide>
        <Slide right>
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
