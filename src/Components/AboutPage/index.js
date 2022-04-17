import React from "react";
import "./aboutPage.css";
import logo from "../../logo192.png";

function AboutPage() {
  return (
    <div id="about" className="page">
      <div className="aboutPageWrapper">
        <div className="textWrapper">
          <h1>About me</h1>
          <p>Something about me</p>

        </div>

        <div className="imageWrapper">
          <img src={logo} alt="logo" />

        </div>
      </div>
    </div>
  );
}

export default AboutPage;
