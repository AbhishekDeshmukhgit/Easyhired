import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config'


function Signup() {
  const [value, setValue] = useState();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  function handleSubmit(e)
  {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
      console.log('user created ',cred.user)
    })
    console.log("Submitted")
  }

  

  // const auth=getAuth()
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
        />
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
        <Form.Control type="password" placeholder="Password"
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
        />
      </Form.Group>
      {/* <Link to="/user/setRole"> */}
      <Button variant="dark" type="submit" >
        Submit
      </Button>
      {/* </Link> */}
    </Form>
  );
}

export default Signup;
