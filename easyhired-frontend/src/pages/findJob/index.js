import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import JobModal from "../../components/modal";
// import { modalActions } from "../../store/modal-slice";

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
  // const [selectedIdJob, setSelectedIdJob] = useState({})
  const modalVisible = useSelector((state) => state.modal.modalVisible);
  console.log(modalVisible, "redux wala modal");
  const dispatch = useDispatch();

  const [selectedJob, setSelectedJob] = useState();

  // function handleApplyNow(id) {
  //   // dispatch(modalActions.showModal());
  //   // setShowModal(true);
  //   setSelectedJob(id);
  //   console.log(selectedJob);
  //   // setSelectedIdJob(jobs[selectedJob])
  // }

  return (
    <Container className="mt-4">
      <h2 className="text-center">Job Openings</h2><br />
      {jobs.map((job, id) => {
        return (
          <Card style={{ marginBottom: "40px" }} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src="holder.js/100px180"
                  style={{ width: "50%" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    {job.profile}, {job.company}
                  </Card.Title>
                  <Card.Text>
                    {job.desc}<br />The company was started in John Warnock's garage.
                    The name of the company, Adobe, comes from Adobe Creek in
                    Los Altos, California, which ran behind Warnock's house.
                    That creek is so named because of the type of clay found
                    there (Adobe being a Spanish word for Mudbrick), which
                    alludes to the creative nature of the company's software.
                    Adobe's corporate logo features a stylized "A" and was
                    designed by graphic designer Marva Warnock, John Warnock's
                    wife. In 2020, the company updated its visual identity,
                    including updating its logo to a single color, an all-red
                    logo that is warmer and more contemporary.
                  </Card.Text>
                  <Link to={`/applynow`}>
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
