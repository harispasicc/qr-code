import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import QRCode from "qrcode";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { insertTitle } from "../api/qrcode";
import { useNavigate } from "react-router-dom";
import { remove } from "../api/qrcode";
import { Context } from "../contexts/Context";
import QrCodeModal from "./QrCodeModal";

function Generate() {
  const {
    show,
    setShow,
    QrCode,
    setQrCode,
    newTitle,
    setNewTitle,
    url,
    setUrl,
    id,
  } = useContext(Context);

  const navigate = useNavigate();

  const handleClose = () => {
    setQrCode(null);

    navigate("/");
  };

  const Generate = () => {
    if (newTitle) {
      insertTitle({ title: newTitle, url: url });

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
    }
  };

  const handleDelete = () => {
    remove(id);
    navigate("/");
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
                <Form.Control
                  type="title"
                  placeholder="Title"
                  autoFocus
                  onChange={e => {
                    setNewTitle(e.target.value);
                  }}
                  value={newTitle}
                />
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
            <Button variant="primary" onClick={e => Generate(e)}>
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
          <Modal show={show}>
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
      )}
    </>
  );
}
export default Generate;
