import React from "react";
import "./aboutPage.css";
import { FaReact, FaGitAlt, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaDatabase, FaCode, FaLinkedin } from "react-icons/fa";

function AboutPage() {
  return (
    <div id="about" className="page">
      <div className="aboutPageWrapper">
        <div className="textWrapper">
          <h1>About me</h1>
          <p>Hi, I am a front-end developer based in Birmingham UK. I entered the world of tech thanks to the School of Code bootcamp which I graduated from in April 2021. Since then I have been working as a front-end developer, bringing ideas to life with code.

          </p>
          <div className="iconContainer">

            <a href="https://www.linkedin.com/in/serena-graham-8a2b7a200/">
              <p>Find me on LinkedIn</p>
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/SerenaElizabeth">
              <p>See my projects on github</p>
              <FaGithub className="icon" />
            </a>

          </div>
        </div>

        <div className="iconsWrapper">
          <div className="row">Skills</div>

          <div className="row">
            <div>
              <p>React</p>
              <FaReact className="icon" />
            </div>
            <div>
              <p>Git</p>
              <FaGitAlt className="icon" />
            </div>
          </div>
          <div className="row">
            <div>
              <p>CSS3</p>
              <FaCss3Alt className="icon" />
            </div>
            <div>
              <p>Github</p>
              <FaGithub className="icon" />
            </div>
          </div>
          <div className="row">
            <div>
              <p>HTML5</p>
              <FaHtml5 className="icon" />
            </div>
            <div>
              <p>Javascript</p>
              <FaJsSquare className="icon" />
            </div>
          </div>
          <div className="row">
            <div>
              <p>PostgreSQL</p>
              <FaDatabase className="icon" />
            </div>
            <div>
              <p>VS code</p>
              <FaCode className="icon" />
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default AboutPage;
