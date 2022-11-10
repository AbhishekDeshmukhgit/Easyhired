import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

function Signup() {
  const [value, setValue] = useState();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Full name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone no.</Form.Label>
        <PhoneInput
          country={"ind"}
          value={value}
          onChange={setValue}
          // className="phoneInput d-flex"
          // containerStyle={{ width: "50%" }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
