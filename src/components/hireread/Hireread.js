import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";
// import './Read.css'

export default function Hireread() {

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
            console.log('Could not find ')
          }
        })
      },[id])

  return (
    <Card className="my-3">
      {
        data && 
        <>
        <Card.Body>
        <Card.Title className="text-center mb-4">{data.name}</Card.Title>
        <Card.Text className='mb-4'>{data.desc}</Card.Text>
        <hr />
        <Card.Text><strong>Location:</strong> {data.location}</Card.Text>
        <Card.Text><strong>Job Profile:</strong> {data.role}</Card.Text>
        <Card.Text><strong>Salary:</strong> {data.salary}</Card.Text>
      </Card.Body>
      <Link to={`/hireme/${id}`}>
      <center><Button className="center" variant="dark"style={{backgroundColor:"blue"}} >Hire Me !</Button>
      </center>
      </Link>
        </>
      }
    </Card>
    
  )
}
