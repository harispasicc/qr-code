import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./components/Generate";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Show from "./components/Show";
import { Context } from "./contexts/Context";

function App() {
  const [show, setShow] = useState(false);
  const [QrCode, setQrCode] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [url, setUrl] = useState("");
  const [qrcodes, setQrCodes] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [findLastEl, setFindLastEl] = useState();
  const [id, setId] = useState();
  const [validation, setValidation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrModal, setQrModal] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <Context.Provider
      value={{
        show,
        setShow,
        QrCode,
        setQrCode,
        newTitle,
        setNewTitle,
        url,
        setUrl,
        qrcodes,
        setQrCodes,
        searchActive,
        setSearchActive,
        filteredSearch,
        setFilteredSearch,
        findLastEl,
        setFindLastEl,
        id,
        setId,
        validation,
        setValidation,
        showModal,
        setShowModal,
        qrModal,
        setQrModal,
      }}
    >
      <BrowserRouter>
        <Header handleShow={handleShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/show" element={<Show />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
