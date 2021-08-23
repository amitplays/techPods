import React from "react";
import { Button, Form, Row, Col, InputGroup, Tabs, Tab } from "react-bootstrap";
import { StudentForm, EmployerForm } from "./StudentForm";

export default function ContactUs() {
  return (
    <>
      <div className="contactUsBody">
        <h1 style={{ padding: 40, textAlign: "left" }}>Contact Us</h1>
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
