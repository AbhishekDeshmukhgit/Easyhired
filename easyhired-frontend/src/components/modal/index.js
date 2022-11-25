import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

function JobModal({ jobId }) {
  const modalVisible = useSelector((state) => state.modal.modalVisible);
  const dispatch = useDispatch();
  console.log(jobId, "job id");

  const handleClose = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <>
      <Modal show={modalVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>abc</Modal.Title>
        </Modal.Header>
        <Modal.Body>hahah</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Apply Now!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JobModal;
