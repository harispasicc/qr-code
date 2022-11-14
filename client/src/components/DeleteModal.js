import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrAlert } from "react-icons/gr";
import { remove } from "../api/qrcode";
import axios from "axios";

function DeleteModal({ show, setShow }) {
  const [qrcodes, setQrCodes] = useState([]);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const remove = async id => {
      try {
        const res = await axios.delete(`http://localhost:5000/qrcode/${id}`);
        setQrCodes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    remove();
  }, [qrcodes]);

  return (
    <div>
      {qrcodes.map((qr, index) => (
        <Modal show={show} key={index}>
          <Modal.Header>
            <Modal.Title>Delete!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GrAlert className="alert-icon" /> Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                remove(qr._id);
              }}
            >
              Ok
            </Button>
            <Button variant="secondary" onClick={handleClose()}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </div>
  );
}

export default DeleteModal;
