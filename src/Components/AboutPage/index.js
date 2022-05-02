import React from "react";
import "./aboutPage.css";
import { FaReact, FaGitAlt, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaDatabase, FaCode } from "react-icons/fa";

function AboutPage() {
  return (
    <div id="about" className="page">
      <div className="aboutPageWrapper">
        <div className="textWrapper">
          <h1>About me</h1>
          <p>Hi, I am a font-end developer with a passion for bringing ideas to life with code. I enjoy creating responsive apps with great user experiences. </p>

        </div>

        <div className="iconsWrapper">
          <div className="row">
            <FaReact className="icon" />
            <FaGitAlt className="icon" />
          </div>
          <div className="row">
            <FaCss3Alt className="icon" />
            <FaGithub className="icon" />
          </div>
          <div className="row">
            <FaHtml5 className="icon" />
            <FaJsSquare className="icon" />
          </div>
          <div className="row">
            <FaDatabase className="icon" />
            <FaCode className="icon" />
          </div>




        </div>
      </div>
    </div>
  );
}

export default AboutPage;
