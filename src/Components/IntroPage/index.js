import React from "react";
import video from "./video.mp4";
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-scroll'
import './introPage.css'

function IntroPage() {
  return (
    <div className='introPageContainer page' id="home">
      <div className="introPageBackground">
        <video className="videoBg" autoPlay muted loop src={video} type="video/mp4" />
      </div>
      <div className="introPageContent">
        <h1 className='introH1'>Serena Graham</h1>
        <h2 className="introH2">Front-End Developer</h2>
        <Link className='icon' to="about" smooth={true} duration={1000}>
          <FaArrowDown className="arrowIcon" />
        </Link>
      </div>
    </div>
  );
}

export default IntroPage;
