import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrAlert } from "react-icons/gr";

function DeleteModal({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <GrAlert className="alert-icon" /> Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
