import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  useNavigate } from 'react-router-dom'
import {auth} from '../../firebase/config'
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn,setLoggedIn]=useState(false);
  

  const navigate=useNavigate();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      signInWithEmailAndPassword(auth,username,password)
    .then((cred)=>{
      setLoggedIn(true)
      console.log('user logged in ', cred.user)
    })
    }catch(err){
      console.log(err)
    }
    
    loggedIn?navigate('/findJob'):<div>Incorrect Password</div>
    
    console.log(username,password)
  };
  return (
    // <Container className="box-style">
    <div>
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
    </div>
    
    // </Container>
  );
}

export default Login;
