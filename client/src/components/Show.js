import React, { useState, useEffect } from "react";
import paragon from "../assets/images/paragon-qr-code (3).png";
import { BsTrash } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Show() {
  const [qrcodes, setQrCodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listQr = async () => {
      try {
        const res = await axios.get("http://localhost:5000/qrcode");
        setQrCodes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    listQr();
  }, []);

  const deleteModal = () => {
    navigate("/delete-modal");
  };

  return (
    <div className="list">
      {qrcodes.map((qr, index) => (
        <div key={index} className="show-container">
          <h3>{qr.title}</h3>
          <img key={qr._id} src={qr.url} alt="paragon" />
          <Link to="/" className="map-location">
            <TbMap2 />
          </Link>
          <Link to="/delete-modal">
            <BsTrash className="delete-show" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Show;
