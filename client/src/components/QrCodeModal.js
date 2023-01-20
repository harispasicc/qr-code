import React from "react";
import Modal from "react-bootstrap/Modal";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

function QrCodeModal({ show, setShow, newTitle, QrCode, handleDelete }) {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Scan QR Code to access our location!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="generate-title">{newTitle}</div>
          <img src={QrCode} alt="qr" />
        </Modal.Body>
        <div className="buttons">
          <Link to="/" className="return">
            <RiArrowGoBackFill />
          </Link>
          <a className="download" href={QrCode} download="paragon-qr-code">
            <BsDownload />
          </a>
          <BsTrash className="delete" onClick={handleDelete} />
        </div>
      </Modal>
    </>
  );
}

export default QrCodeModal;
