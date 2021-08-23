import { Button, Badge } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";

export default function Certifications() {
  return (
    <div>
      <div className="workshopsBody">
        <h1 style={{ padding: 40, textAlign: "left" }}>Certifications</h1>
        <div className="fourCardRow">
          <Fade left>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                Web App Developer{" "}
                <Badge pill bg="dark">
                  3 Tests
                </Badge>
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
          <Fade left>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                Mobile App Developer{" "}
                <Badge pill bg="dark">
                  3 Tests
                </Badge>
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
          <Fade right>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                Project Management{" "}
                <Badge pill bg="dark">
                  2 Tests
                </Badge>
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
          <Fade right>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                UX/UI Designer{" "}
                <Badge pill bg="dark">
                  3 Tests
                </Badge>
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
