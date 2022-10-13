import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import QRCode from "qrcode";
import { Link } from "react-router-dom";

function Generate({ show, setShow }) {
  const [url, setUrl] = useState("");
  const [QrCode, setQrCode] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Generate = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: { dark: "#000000ff", light: "#ffffffff" },
      },
      (err, url) => {
        if (err) return console.log(err);
        setQrCode(url);
      }
    );
  };

  return (
    <>
      {!QrCode && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Generate my QR Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>QR Code Title</Form.Label>
                <Form.Control type="title" placeholder="Title" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter URL</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter URL for your QR Code..."
                  rows={3}
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={Generate}>
              Generate
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {QrCode && (
        <>
          <img src={QrCode} />
          <div>
            <Link to="/" className="return">
              Return
            </Link>

            <a className="download" href={QrCode} download="paragon-qr-code">
              Download
            </a>

            <a className="delete">Delete</a>
          </div>
        </>
      )}
    </>
  );
}
export default Generate;
