import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="page">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <div className="projects-card">

          <h3>Boost</h3>
          <p>A full stack app created with React and ASP.net</p>
          <a href="https://boostapp.netlify.app/" target='_blank'>Link</a>
          <br></br>
          <a href="https://github.com/SerenaElizabeth/BoostFrontEnd" target='_blank'>Code</a>

        </div>
        <div className="projects-card">
          <h3>Ping Pong Game</h3>
          <p>A retro style game created with HTML canvas</p>
          <a href="https://serenaelizabeth.github.io/PingPong/" target='_blank'>Link</a>
          <br></br>
          <a href="https://github.com/SerenaElizabeth/PingPong" target='_blank'>Code</a>
        </div>
        <div className="projects-card">
          <h3>Recomendation App</h3>
          <p>A movie recomendation app created using React and Firebase</p>
          <a href="https://github.com/SerenaElizabeth/RecommendationApp" target='_blank'>Code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
