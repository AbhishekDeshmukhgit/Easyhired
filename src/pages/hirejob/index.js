
import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore/lite';

const Email = window.Email;

function HireJob() {

  const {id}=useParams()

  const [data,setData]=useState(null)

  useEffect(()=>{
      const docRef = doc(projectFirestore,'post', id); 
      getDoc(docRef).then((doc)=>{
        console.log(doc.data())
        if(doc.exists)
        {
          setData(doc.data())
        }
        else{
          console.log('Could not find that recipe')
        }
      })
    },[id])

  const [name, setName] = useState('');
  const [email,setEmail]=useState('');

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    console.log("I want to hire you")
    Email.send({
      SecureToken: '3304d1d1-67bc-45a1-836d-7e51dbcb2551',
      To: data.email,
      From:'abhidesh16@gmail.com' ,
      Subject: "Job application",
      Body: `Hii ${data.name} myself ${name} want to hire you .you can share your resume and details on ${email} for further process`,
    }).then((message) => alert(message));
  }

  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form">
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>



        <Container className="text-center">
          <Button variant="dark" type="submit" style={{backgroundColor:"green"}}>
            Hire !
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default HireJob;
