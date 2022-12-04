import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

function JobModal({ selectedIdJob }) {
  // const [jobDetails, setJobDetails] = useState({})
  // useEffect(() => {
  //   setJobDetails(jobId);
  // }, [])
  console.log(selectedIdJob, 'selected')
  const selectedJob = selectedIdJob;
  const modalVisible = useSelector((state) => state.modal.modalVisible);
  const dispatch = useDispatch();
  console.log(selectedJob);

  const handleClose = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <>
      <Modal show={modalVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> abc</Modal.Title>
        </Modal.Header>
        <Modal.Body>hahaha</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Apply Now!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JobModal;
