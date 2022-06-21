import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
} from "react-bootstrap";
import { StudentForm, EmployerForm } from "../Components/StudentForm";

export default function LoginSignup(props) {
  return (
    <Modal
      {...props}
      className="loginSignup"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Get Started
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Download The App</h4>
        <Tabs
          defaultActiveKey="Android"
          id="uncontrolled-tab-example"
          className="mb-3 ContactTabStyle"
          variant="pills"
        >
          {/* -------- Student Tab ------- */}
          <Tab eventKey="Android" title="Android">
            <div className="parentOfOneCard">
              <div className="cardStyles fullWidthContactCard"></div>
            </div>
          </Tab>

          {/* -------- Employer Tab ------- */}
          <Tab eventKey="IOS" title="IOS">
            <div className="parentOfOneCard">
              <div className="empContactUsCard fullWidthContactCard"></div>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
