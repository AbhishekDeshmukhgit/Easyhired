import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";
import './Read.css'

const Read = () => {
    const {id}=useParams()

    const [data,setData]=useState(null)

    useEffect(()=>{
        const docRef = doc(projectFirestore,'jobs', id); 
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



  return (
    <Card className="my-3">
      {
        data && 
        <>
        <Card.Body>
        <Card.Title className="text-center mb-4">{data.company}</Card.Title>
        <Card.Text className='mb-4'>{data.desc}</Card.Text>
        <hr />
        <Card.Text><strong>Location:</strong> {data.location}</Card.Text>
        <Card.Text><strong>Job Profile:</strong> {data.profile}</Card.Text>
        <Card.Text><strong>Salary:</strong> {data.salary}</Card.Text>
      </Card.Body>
      <Link to={`/jobform/${id}`}>
      <center><Button className="center" variant="dark"style={{backgroundColor:"green"}} >Apply Now</Button>
      </center>
      </Link>

        </>
      }
    </Card>
  );
};

export default Read;
