import React, { useState,useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import officeImg from '../../assets/profile/office.jpeg'

import { projectFirestore } from "../../firebase/config";
import { collection,getDocs } from 'firebase/firestore/lite';

// import {Email} from 'smtpjs';
const Email = window.Email;


function FindJob() {

  const [selectedJob, setSelectedJob] = useState();
  const [jobs,setJobs]=useState(null)
  const [post,setPost]=useState(null)
  console.log(jobs)

  // function handleApplyNow(id) {
  //   // dispatch(modalActions.showModal());
  //   // setShowModal(true);
  //   setSelectedJob(id);
  //   console.log(selectedJob);
  //   // setSelectedIdJob(jobs[selectedJob])
  // }

  // function handleapply(e){
  //   e.preventDefault();
  //   console.log("Applied")
  //   Email.send({
  //     SecureToken: '3304d1d1-67bc-45a1-836d-7e51dbcb2551',
  //     To: post.email,
  //     From:'abhidesh16@gmail.com' ,
  //     Subject: "job application",
  //     Body: "Hii abhi  i want to hire you",
  //   }).then((message) => alert(message));
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
  useEffect(()=>{
    const colRef=collection(projectFirestore,'post')
    getDocs(colRef).then((snapshot)=>{
      if(snapshot.empty)
      {
        console.log("No post to load")
      }
      else{
        let result=[]
        snapshot.docs.forEach(doc=>{
          result.push({id:doc.id,...doc.data()})
        })
        setPost(result);
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])



  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-end mb-4">
        <input
          type="text"
          placeholder="Search"
          // value={searchQuery}
          // onChange={handleSearch}
          style={{ marginRight: "10px" }}
        />
      </div>
      <h2 className="text-center">Job Openings</h2><br />
      <Link to={`/user/setRole`}>
      <div className="d-flex align-items-center mb-4 text-center">
        <Button variant="dark" size="lg">
           Post
        </Button>
      </div>
      </Link>
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
                    {job.desc.substring(0,100)}....<br />
                  </Card.Text>
                  <Card.Text>
                    Location: {job.location}<br />
                  </Card.Text>
                  <Link to={`/jobform/${job.id}`}>
                    <Button  variant="dark"style={{backgroundColor:"green"}} >Apply Now</Button>
                  </Link>
                  
                  <Link to={`/findJob/${job.id}`}>
                  <Button variant="dark" >Read more</Button>
                  </Link>
                  
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
      {post && post.map((post, id) => {
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
                    {post.name}, {post.role}
                  </Card.Title>
                  <Card.Text>
                    {post.desc.substring(0,100)}<br />
                  </Card.Text>
                  <Link to={`/hireme/${post.id}`}>
                    <Button variant="dark" style={{backgroundColor:"blue"}}>Hire Me !</Button>
                  </Link>
                  <Link to={`/findJob/post/${post.id}`}>
                  <Button variant="dark" >Read more</Button>
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


// import React, { useState, useEffect } from "react";
// import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import officeImg from "../../assets/profile/office.jpeg";

// import { projectFirestore } from "../../firebase/config";
// import { collection, getDocs } from "firebase/firestore/lite";

// const Email = window.Email;

// function FindJob() {
//   const [selectedJob, setSelectedJob] = useState();
//   const [jobs, setJobs] = useState(null);
//   const [post, setPost] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const colRef = collection(projectFirestore, "jobs");
//     getDocs(colRef)
//       .then((snapshot) => {
//         if (snapshot.empty) {
//           console.log("No jobs to load");
//         } else {
//           let result = [];
//           snapshot.docs.forEach((doc) => {
//             result.push({ id: doc.id, ...doc.data() });
//           });
//           setJobs(result);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     const colRef = collection(projectFirestore, "post");
//     getDocs(colRef)
//       .then((snapshot) => {
//         if (snapshot.empty) {
//           console.log("No post to load");
//         } else {
//           let result = [];
//           snapshot.docs.forEach((doc) => {
//             result.push({ id: doc.id, ...doc.data() });
//           });
//           setPost(result);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredJobs = jobs
//     ? jobs.filter(
//         (job) =>
//           job.profile.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           job.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           job.location.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   const filteredPosts = post
//     ? post.filter(
//         (post) =>
//           post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           post.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           post.desc.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   return (
//     <Container className="mt-4">
//       <div className="d-flex justify-content-end mb-4">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={handleSearch}
//           style={{ marginRight: "10px" }}
//         />
//       </div>
//       <h2 className="text-center">Job Openings</h2>
//       <br />
//       <Link to={`/user/setRole`}>
//         <div className="d-flex align-items-center mb-4 text-center">
//           <Button variant="dark" size="lg">
//             Post
//           </Button>
//         </div>
//       </Link>
//       {/* {filteredJobs.map((job, id) => {
//         return (
//           <Card style={{ marginBottom: "40px" }} key={id}>
//             <Row>
//               <Col md={3} className="text-center p-4">
//                 <Card.Img
//                   variant="top"
//                   src={officeImg}
//                   style={{ width: "100%" }}
//                 />
//               */}
//     {filteredJobs && filteredJobs.map((post, id) => {
//         return (
//           <Card style={{ marginBottom: "40px" }} key={id}>
//             <Row>
//               <Col md={3} className="text-center p-4">
//                 <Card.Img
//                   variant="top"
//                   src={officeImg}
//                   style={{ width: "100%" }}
//                 />
//               </Col>
//               <Col>
//                 <Card.Body>
//                   <Card.Title>
//                     {filteredJobs.name}, {filteredJobs.role}
//                   </Card.Title>
//                   <Card.Text>
//                     {filteredJobs.desc}<br />
//                   </Card.Text>
//                   <Link to={`/hireme/${post.id}`}>
//                     <Button variant="dark" style={{backgroundColor:"blue"}}>Hire Me !</Button>
//                   </Link>
//                   <Link to={`/findJob/post/${post.id}`}>
//                   <Button variant="dark" >Read more</Button>
//                   </Link>
//                 </Card.Body>
//               </Col>
//             </Row>
//           </Card>
//         );
//       })}
//          </Container>
//   );
// }