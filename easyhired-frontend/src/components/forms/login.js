import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    // console.log("login submit");
    console.log({
      username: username,
      password: password,
    });
  };
  return (
    // <Container className="box-style">
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        name="username"
        value={username}
        onChange={handleUserNameChange}
        controlId="formBasicEmail"
      >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    // </Container>
  );
}

export default Login;
