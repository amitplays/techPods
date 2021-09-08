import { Button, Badge, Alert } from "react-bootstrap";
import React from "react";
import Fade from "react-reveal/Slide";

export default function Workshops() {
  return (
    <div>
      <div className="workshopsBody">
        <div className="cardStyles fullWidthHomeCard">
          <h1 style={{ textAlign: "left" }}>Workshops</h1>

          <h4 className="headingSubtext">
            You can now ask your college to{" "}
            <Alert.Link href="/"> connect with us !</Alert.Link> for an
            on-campus workshop or check out our upcoming worshops
          </h4>
          <Button variant="warning" className="ctaButton">
            Find Workshops
          </Button>
        </div>
        <div className="fourCardRow">
          <Fade bottom>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                Enggineering{" "}
                <Badge pill bg="warning">
                  4 year
                </Badge>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="warning">Check Availability</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                MCA{" "}
                <Badge pill bg="warning">
                  2 year
                </Badge>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="warning">Check Availability</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                BSE (C.S){" "}
                <Badge pill bg="warning">
                  3 year
                </Badge>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="warning">Check Availability</Button>
            </div>
          </Fade>
          <Fade bottom>
            <div className="fourCardStyle">
              <h4 className="subsCardHeading">
                BCA{" "}
                <Badge pill bg="warning">
                  3 year
                </Badge>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="warning">Check Availability</Button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
