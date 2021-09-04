import React from "react";
import { Button, Form, Row, Col, InputGroup, Tabs, Tab } from "react-bootstrap";
import { StudentForm, EmployerForm } from "./StudentForm";
import faq2 from "../assets/resume.png";

export default function ContactUs() {
  return (
    <>
      <div className="contactUsBody">
        <div className="parentOfOneCard">
          <div className="cardStyles fullWidthHomeCard">
            <Row>
              <Col sm={6}>
                <div
                  style={{
                    padding: "30px",
                  }}
                >
                  <h1>Launch a Fulfilling, Future-Proof Career</h1>
                  <p>
                    Become invaluable in our tech-driven world. Meet the global
                    demand for problem-solvers with strong technical foundations
                    and the agility to keep learning.
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div
                  style={{
                    display: "block",
                    margin: "auto",
                    maxWidth: "300px",
                    padding: "30px",
                  }}
                >
                  <img src={faq2} alt="speed" className="CardImages" />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Tabs
          defaultActiveKey="Students"
          id="uncontrolled-tab-example"
          className="mb-3 ContactTabStyle"
          variant="pills"
        >
          {/* -------- Student Tab ------- */}
          <Tab eventKey="Students" title="Students">
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
          <Tab eventKey="Employers" title="Employers">
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
      </div>
    </>
  );
}
