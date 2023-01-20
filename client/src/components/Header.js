import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { MdQrCodeScanner } from "react-icons/md";
import axios from "axios";
import { Context } from "../contexts/Context";

function Header({ handleShow }) {
  const { show, setShow, Qrcode, setQrCode } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState("");
  const toggleMenu = () => {
    setShow(!show);
  };

  const showDropdown = show ? "show" : "";

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  // const filteredItems = Qrcode.filter(QrCodes =>
  //   QrCodes.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const filterContent = (QrCode, searchTerm) => {
  //   const result = QrCode.filter(QrCode => QrCode.title.includes(searchTerm));
  //   setQrCode(result);
  // };

  // const handleSearch = e => {
  //   const searchTerm = e.target.value;
  //   axios.get("http://localhost:4000/qrcode").then(res => {
  //     if (res.data.success) {
  //       filterContent(res.data.QrCode, searchTerm);
  //     }
  //   });
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <MdQrCodeScanner className="qr-logo" />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => toggleMenu()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "navbar-collapse collapse justify-content-end " + showDropdown
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink
                to="/generate"
                className="nav-link active"
                aria-current="page"
              >
                <Button onClick={handleShow}>Generate</Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/show">
                <Button>Show</Button>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2  "
              id="inputlg"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            {/* <button
              className="btn btn-primary"
              style={{ color: "white" }}
              type="submit"
            >
              Search
            </button> */}
          </form>
          {/* <ul>
            {filteredItems.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
