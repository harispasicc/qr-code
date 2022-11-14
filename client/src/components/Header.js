import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { MdQrCodeScanner } from "react-icons/md";

function Header({ handleShow, show, setShow }) {
  const toggleMenu = () => {
    setShow(!show);
  };

  const showDropdown = show ? "show" : "";

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
            />
            <button
              className="btn btn-primary"
              style={{ color: "white" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
