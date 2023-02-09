import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrAlert } from "react-icons/gr";

function DeleteModal({ setShowModal, handleDelete }) {
  return (
    <div>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GrAlert className="alert-icon" /> Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDelete}>
            Ok
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
