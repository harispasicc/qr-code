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
      </BrowserRouter>{" "}
    </Context.Provider>
  );
}

export default App;
