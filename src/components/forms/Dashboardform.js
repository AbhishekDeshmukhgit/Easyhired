
import React, { useState } from 'react';
import { Form, Button,Container } from 'react-bootstrap';
import { projectFirestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore/lite";
import { useNavigate } from 'react-router-dom';


export default function Dashboardform() {
    const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log({ name, about, linkedin, github });
    
    const doc = { name, about, linkedin, github };
    try {
      await addDoc(collection(projectFirestore, "user"), doc);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
    console.log(doc);
    // Submit the form data to the server here
  }
  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form">

        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAbout">
          <Form.Label>About</Form.Label>
          <Form.Control as="textarea" rows={3} value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Enter about" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLinkedin">
          <Form.Label>LinkedIn Profile</Form.Label>
          <Form.Control type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="Enter LinkedIn profile URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGithub">
          <Form.Label>GitHub Profile</Form.Label>
          <Form.Control type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="Enter GitHub profile URL" />
        </Form.Group>

        <Button  type="submit" variant="dark">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
