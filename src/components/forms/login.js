
import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import "./style.css";

import { useLogin } from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {login,error,isPending}=useLogin()
  
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // signInWithEmailAndPassword(auth, username, password)
    //   .then((cred) => {
    //     setLoggedIn(true);
    //     console.log('user logged in ', cred.user);
    //     navigate('/findJob');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setErrorMessage("Incorrect username or password");
    //   });
    login(username,password)
    // navigate('/findJob');
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <h2>Sign in</h2>
        {errorMessage && (
          <Alert variant="danger" className="mb-3">
            {errorMessage}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUserNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="dark" type="submit" className="login-button">
            Sign in
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
