import React from "react";
import Slide from "react-reveal/Slide";
import speed from "../assets/test.png";
import { Button, Carousel } from "react-bootstrap";

export default function Recruiter() {
  return (
    <div className="recruiterBody">
      <div className="parentOfOneCard">
        <div className="cardStylesRecruiter fullWidthHomeCard">
          <h1>
            Build agile teams that excel in a tech- and data-driven economy.
          </h1>
          <span>
            Get ahead in the race for top talent and deliver long-term business
            results with our individual and large-scale enterprise solutions.
            Upskill employees in existing roles, or reskill non-technical
            professionals for entirely new ones in technology, data, marketing,
            design, and product.
          </span>
        </div>
      </div>

      {/* Second Row */}
      <div className="parentOfTwoCards">
        <div className="cardStylesRecruiter cardOneOfTwo">
          <h2 className="cardHeading">A Consultative Approach</h2>
          <p>
            We deploy a dedicated project team who will work with you to craft a
            tailored program that serves your specific talent needs and business
            objectives.
          </p>
          <img src={speed} alt="speed" className="CardImages" />
          <div className="buttonGroup">
            <Button size="sm" variant="outline-warning">
              Learn More
            </Button>
          </div>
        </div>
        <div className="cardStylesRecruiter cardTwoOfTwo">
          <h2 className="cardHeading">Assessment-Led Training</h2>
          <p>
            Developed with the prestigious Standards Boards our assessments
            benchmark teams so you can evaluate technical skills, and prescribe
            training that targets strengths and weaknesses.
          </p>
          <img src={speed} alt="speed" className="CardImages" />
          <div className="buttonGroup">
            <Button size="sm" variant="outline-warning">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
