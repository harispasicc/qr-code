import React from "react";
import paragon from "../assets/images/paragon-qr-code (3).png";
import { BsTrash } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Show() {
  return (
    <div className="show-container">
      <h3>My Qr Code 1</h3>
      <img src={paragon} alt="paragon" />
      <Link to="/" className="map-location">
        <TbMap2 />
      </Link>
      <Link to="/" className="delete-show">
        <BsTrash />
      </Link>
    </div>
  );
}

export default Show;
