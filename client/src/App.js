import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./components/Generate";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Show from "./components/Show";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [show, setShow] = useState(false);
  const [QrCode, setQrCode] = useState("");

  const handleShow = () => setShow(true);

  return (
    <BrowserRouter>
      <Header handleShow={handleShow} show={show} setShow={setShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generate"
          element={
            <Generate
              show={show}
              setShow={setShow}
              QrCode={QrCode}
              setQrCode={setQrCode}
            />
          }
        />
        <Route
          path="/show"
          element={<Show QrCode={QrCode} setQrCode={setQrCode} />}
        />
        <Route
          path="/delete-modal"
          element={<DeleteModal show={show} setShow={setShow} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
