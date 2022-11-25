import React, { useState } from "react";
import { Card, Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import JobModal from "../../components/modal";
import { modalActions } from "../../store/modal-slice";

const jobs = [
  {
    company: "Adobe",
    profile: "sf engineer",
    salary: "200000",
    desc: "software engineer in js environment",
  },
  {
    company: "Google",
    profile: "ml engineer",
    salary: "1200000",
    desc: "machine learning predicting things",
  },
  {
    company: "Meta",
    profile: "cloud engineer",
    salary: "1000000",
    desc: "cloud architecture engineer",
  },
];

function FindJob() {
  const modalVisible = useSelector((state) => state.modal.modalVisible);
  console.log(modalVisible, "redux wala modal");
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState();

  function handleLearnMore(id) {
    dispatch(modalActions.showModal());
    // setShowModal(true);
    setSelectedJob(id);
    console.log(selectedJob);
  }

  return (
    <Container className="d-flex flex-wrap justify-content-center text-center">
      {jobs.map((job, id) => {
        return (
          <Card style={{ width: "18rem", marginRight: "10px" }} key={id}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{job.company}</Card.Title>
              <Card.Text>{job.profile}</Card.Text>
              <Button variant="primary" onClick={() => handleLearnMore(id)}>
                Learn more
              </Button>
            </Card.Body>
          </Card>
        );
      })}
      <JobModal jobId={jobs[selectedJob]} />
    </Container>
  );
}

export default FindJob;
