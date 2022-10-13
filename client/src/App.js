// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import QrShow from "./components/QrShow";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <QrShow />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./components/Generate";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Show from "./components/Show";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <BrowserRouter>
      <Header handleShow={handleShow} show={show} setShow={setShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generate"
          element={<Generate show={show} setShow={setShow} />}
        />
        <Route path="/show" element={<Show />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
