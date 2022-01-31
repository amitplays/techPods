import { Button, Badge, Alert } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";
import kb from "../assets/KiloBit.png";
import mb from "../assets/MegaBit.png";
import gb from "../assets/GigaBit.png";
import tb from "../assets/TeraBit.png";

export default function Certifications() {
  return (
    <div>
      <div className="workshopsBody">
        <div className="cardStyles fullWidthHomeCard">
          <h1 style={{ textAlign: "left" }}>Certificate Courses</h1>

          <h4 className="headingSubtext">
            Certifications will be awarded to students who clear the exam from
            the <Alert.Link href="/">BitRecruiter App</Alert.Link>.
          </h4>
          <Button variant="warning" className="ctaButton">
            All Courses
          </Button>
        </div>
        <div className="fourCardRow">
          <Fade bottom>
            <div className="fourCardStyle">
              <img
                height={90}
                width={90}
                style={{ alignSelf: "center" }}
                src={kb}
                alt="speed"
              />
              <h4 className="subsCardHeading">KiloBIT </h4>
              <p className="headingSubtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="success">Enroll Now</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={95}
                style={{ alignSelf: "center" }}
                src={mb}
                alt="speed"
              />
              <h4 className="subsCardHeading">
                MegaBIT{" "}
                {/* <Badge pill bg="dark">
                  3 Tests
                </Badge> */}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="success">Enroll Now</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={90}
                style={{ alignSelf: "center" }}
                src={gb}
                alt="speed"
              />
              <h4 className="subsCardHeading">
                GigaBIT{" "}
                {/* <Badge pill bg="dark">
                  2 Tests
                </Badge> */}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="success">Enroll Now</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle cardFixedHeight">
              <img
                height={90}
                width={90}
                style={{ alignSelf: "center" }}
                src={tb}
                alt="speed"
              />
              <h4 className="subsCardHeading">
                TeraBIT{" "}
                {/* <Badge pill bg="dark">
                  3 Tests
                </Badge> */}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="success">Enroll Now</Button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
