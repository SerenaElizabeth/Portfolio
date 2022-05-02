import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="page">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <div className="projects-card">

          <h3>Boost</h3>
          <p>A social events app created with React and ASP.net and using Auth0 authentication.</p>
          <a href="https://boostapp.netlify.app/" target='_blank'><button>Link</button></a>
          <br></br>
          <a href="https://github.com/SerenaElizabeth/BoostFrontEnd" target='_blank'><button>Code</button></a>

        </div>
        <div className="projects-card">
          <h3>Ping Pong Game</h3>
          <p>A retro style game created with HTML canvas</p>
          <a href="https://serenaelizabeth.github.io/PingPong/" target='_blank'><button>Link</button></a>
          <br></br>
          <a href="https://github.com/SerenaElizabeth/PingPong" target='_blank'><button>Code</button></a>
        </div>
        <div className="projects-card">
          <h3>Recommendation App</h3>
          <p>A movie recommendation app created using React and Firebase</p>
          <a href="https://github.com/SerenaElizabeth/RecommendationApp" target='_blank'><button>Code</button></a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
