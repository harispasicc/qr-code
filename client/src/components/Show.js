import React, { useEffect, useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import DeleteModal from "./DeleteModal";
import Modal from "react-bootstrap/Modal";
import { Context } from "../contexts/Context";

import { remove } from "../api/qrcode";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import ValidationMessage from "./ValidationMessage";

function Show() {
  const {
    QrCode,
    newTitle,
    setNewTitle,
    qrcodes,
    setQrCodes,
    searchActive,
    filteredSearch,
    setFindLastEl,
    setUrl,
    id,
    setId,
    validation,
    setValidation,
    qrModal,
    setQrModal,
    showModal,
    setShowModal,
    url,
  } = useContext(Context);

  useEffect(() => {
    const listQr = async () => {
      try {
        const res = await axios.get("http://localhost:4000/qrcode");
        setQrCodes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    listQr();
    findLast();
  }, [id]);

  const findLast = () => {
    const findLastElement = qrcodes[qrcodes.length - 1];
    setFindLastEl(findLastElement);
  };

  useEffect(() => {}, []);

  const showDeleteModal = id => {
    setShowModal(true);
    setId(id._id);
    setNewTitle(id.title);
  };

  const handleBack = () => {
    setQrModal(false);
  };

  const handleDelete = async () => {
    await remove(id);
    setShowModal(false);
    setId("");
    setTimeout(() => {
      setValidation(true);
    }, 500);
  };

  const openQRModal = item => {
    setQrModal(true);
    setId(item._id);
    setUrl(item.url);
    setNewTitle(item.title);
  };

  return (
    <div>
      <div>
        {showModal && (
          <DeleteModal
            showModal={showModal}
            setShowModal={setShowModal}
            title={newTitle}
            id={id}
            handleDelete={handleDelete}
            validation={validation}
          />
        )}
        {validation ? (
          <ValidationMessage title={newTitle} setValidation={setValidation} />
        ) : null}
      </div>
      <div className="list">
        {searchActive ? (
          <>
            {filteredSearch.map((qr, index) => (
              <div key={index} className="show-container">
                <h3>{qr.title}</h3>
                <QRCode
                  size={150}
                  title={qr.title}
                  className="qr-img"
                  key={qr._id}
                  value={qr.url}
                  alt="paragon"
                />
                <TbMap2
                  className="map-location"
                  onClick={() => {
                    openQRModal(qr);
                  }}
                />
                <BsTrash
                  className="delete-show"
                  onClick={() => showDeleteModal(qr)}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {qrcodes.map((qr, index) => (
              <div key={index} className="show-container">
                <h3>{qr.title}</h3>
                <QRCode
                  size={150}
                  title={qr.title}
                  className="qr-img"
                  key={qr._id}
                  value={qr.url}
                  alt="paragon"
                />
                <TbMap2 className="map-location" onClick={openQRModal} />
                <BsTrash
                  className="delete-show"
                  onClick={() => showDeleteModal(qr)}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <div>
        <Modal show={qrModal}>
          <Modal.Header>
            <Modal.Title>Scan QR Code to access our location!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="generate-title">{newTitle}</div>
            <img src={url} alt="qr" /> */}

            {/* <QRCode
              size={150}
              title={newTitle}
              className="qr-img"
              key={id}
              value={url}
              alt="paragon"
            /> */}
          </Modal.Body>
          <div className="buttons">
            <Link className="return">
              <RiArrowGoBackFill onClick={handleBack} />
            </Link>
            <a className="download" href={QrCode} download="paragon-qr-code">
              <BsDownload />
            </a>
            <BsTrash className="delete" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Show;
