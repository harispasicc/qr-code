import React from "react";
import paragon from "../assets/images/paragon-qr-code (3).png";
import maps from "../assets/images/maps.png";

function Home() {
  return (
    <div>
      <h1 className="home-title">Welcome to the Paragon Qr Code Generator</h1>
      <div className="home-left">
        <h1 className="qr-home-title"> Qr Code</h1>
        <img src={paragon} alt="paragon" />
      </div>
      <div className="home-right">
        <img src={maps} alt="maps" />
      </div>
    </div>
  );
}

export default Home;
