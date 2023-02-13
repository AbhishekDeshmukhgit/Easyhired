import React, { useState,useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import officeImg from '../../assets/profile/office.jpeg'

import { projectFirestore } from "../../firebase/config";
import { collection,getDocs } from 'firebase/firestore/lite';


function FindJob() {
  // const [selectedIdJob, setSelectedIdJob] = useState({})

  const [selectedJob, setSelectedJob] = useState();
  const [jobs,setJobs]=useState(null)
  console.log(jobs)

  // function handleApplyNow(id) {
  //   // dispatch(modalActions.showModal());
  //   // setShowModal(true);
  //   setSelectedJob(id);
  //   console.log(selectedJob);
  //   // setSelectedIdJob(jobs[selectedJob])
  // }

  useEffect(()=>{
    const colRef=collection(projectFirestore,'jobs')
    getDocs(colRef).then((snapshot)=>{
      if(snapshot.empty)
      {
        console.log("No jobs to load")
      }
      else{
        let result=[]
        snapshot.docs.forEach(doc=>{
          result.push({id:doc.id,...doc.data()})
        })
        setJobs(result);
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])



  return (
    <Container className="mt-4">
      <h2 className="text-center">Job Openings</h2><br />
      {jobs && jobs.map((job, id) => {
        return (
          <Card style={{ marginBottom: "40px" }} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src={officeImg}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    {job.profile}, {job.company}
                  </Card.Title>
                  <Card.Text>
                    {job.desc}<br />
                  </Card.Text>
                  <Link to={`/jobform`}>
                    <Button variant="dark" >Apply Now</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}

      {/* <JobModal selectedIdJob={selectedIdJob} /> */}
    </Container>
  );
}

export default FindJob;
