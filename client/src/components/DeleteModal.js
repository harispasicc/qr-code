import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrAlert } from "react-icons/gr";
import ValidationMessage from "./ValidationMessage";
import { remove } from "../api/qrcode";
import axios from "axios";

function DeleteModal({ setShowModal, showModal, title, id }) {
  const [validation, setValidation] = useState(false);

  const handleDelete = async () => {
    await remove(id);
    setShowModal(false);

    setTimeout(() => {
      setValidation(true);
    }, 1000);
  };

  const remove = async id => {
    try {
      const res = await axios.delete(`http://localhost:4000/qrcode/${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      {validation && <ValidationMessage title={title} />}
    </div>
  );
}

export default DeleteModal;
