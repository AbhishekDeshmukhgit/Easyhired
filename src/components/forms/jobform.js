// import React, { useState } from 'react';
// import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

// function JobForm() {
//   const [companyName, setCompanyName] = useState('');
//   const [profile, setProfile] = useState('');
//   const [salary, setSalary] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Company Name: ${companyName}`);
//     console.log(`Profile: ${profile}`);
//     console.log(`Salary: ${salary}`);
//     console.log(`Description: ${description}`);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <ControlLabel>Company Name</ControlLabel>
//         <FormControl
//           type="text"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//       </FormGroup>
//       <FormGroup>
//         <ControlLabel>Profile</ControlLabel>
//         <FormControl
//           type="text"
//           value={profile}
//           onChange={(e) => setProfile(e.target.value)}
//         />
//       </FormGroup>
//       <FormGroup>
//         <ControlLabel>Salary</ControlLabel>
//         <FormControl
//           type="text"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//         />
//       </FormGroup>
//       <FormGroup>
//         <ControlLabel>Description</ControlLabel>
//         <FormControl
//           componentClass="textarea"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </FormGroup>
//       <Button type="submit">Submit</Button>
//     </Form>
//   );
// }

// export default JobForm;


import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import { projectFirestore } from "../../firebase/config";
import { collection, getDoc,doc, addDoc } from "firebase/firestore/lite";

function JobForm() {
      
 const [company, setCompanyName] = useState('');
  const [profile, setProfile] = useState('');
  const [salary, setSalary] = useState('');
  const [desc, setDescription] = useState('');

  const navigate=useNavigate();

  async function handleSubmit(e){
    e.preventDefault()
    // const doc={companyName,description,profile,salary}
    const doc={company,desc,profile,salary}
    try{
        await addDoc(collection(projectFirestore,"jobs"),doc);
        navigate('/findJob');
      }catch(err)
      {
        console.log(err)
      }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter company name"
                    value={company}
          onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProfile">
          <Form.Label>Profile</Form.Label>
          <Form.Control type="text" placeholder="Enter profile"
                    value={profile}
          onChange={(e) => setProfile(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter salary" 
            value={salary}
          onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" 
         value={desc}
          onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Container className="text-center">
        <Button variant="dark" type="submit" >
          Submit
        </Button>
      </Container>
    </Form>
  );
}

export default JobForm;
