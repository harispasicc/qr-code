import React, { useState, useEffect, useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import DeleteModal from "./DeleteModal";
import Modal from "react-bootstrap/Modal";
import { Context } from "../contexts/Context";
import QrCodeModal from "./QrCodeModal";
import { remove } from "../api/qrcode";

function Show() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { QrCode, setQrCode, newTitle, setNewTitle, qrcodes, setQrCodes } =
    useContext(Context);

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
  }, []);

  const showDeleteModal = () => {
    setShowModal(true);
  };

  const handleMap = () => {
    return (
      <div>
        <QrCodeModal />;
      </div>
    );
  };

  return (
    <div>
      <div className="list">
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
            <TbMap2 className="map-location" onClick={handleMap} />
            <BsTrash
              className="delete-show"
              onClick={() => showDeleteModal()}
            />
            <div>
              {showModal && (
                <DeleteModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  title={qr.title}
                  id={qr._id}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Show;
