import React from "react";
import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
  Tab,
} from "react-bootstrap";
import { useState, useEffect } from "react";

export function StudentForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom01"
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control required type="text" placeholder="Jesse Gallagar" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustomUsername"
          >
            <Form.Label>Email Address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid E-mail.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group className="mb-3" as={Col} controlId="validationCustom04">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Contact Number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="3"
            controlId="validationCustom04"
          >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid City.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="3"
            controlId="validationCustom05"
          >
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" placeholder="Year" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid year.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Your query here"
              placeholder="Your query here"
            >
              <Form.Control as="textarea" style={{ height: "80px" }} />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              You forgot to write how we can help you !
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button size="sm" variant="outline-success" type="submit">
          Send Query
        </Button>
      </Form>
    </div>
  );
}
export function EmployerForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom01"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom04"
          >
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid company name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button size="sm" variant="warning" type="submit" block>
          Submit form
        </Button>
      </Form>
    </div>
  );
}
