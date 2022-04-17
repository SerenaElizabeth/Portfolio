import React from "react";
import "./navBar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar({ toggleIsOpen }) {
  return (
    <>
      <nav className="nav">
        <div className="navBarContainer">
          <div className="menuIcon" onClick={toggleIsOpen}>
            <FaBars />
          </div>
          <ul className="navMenu">
            <li>
              <Link to="home" smooth={true} duration={1000}>
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={1000}>
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={1000}>
                {" "}
                Projects{" "}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000}>
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
