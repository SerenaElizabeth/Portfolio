import React, { useState } from "react";
import IntroPage from "../Components/IntroPage";
import AboutPage from "../Components/AboutPage";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

import Navbar from "../Components/Navbar";
import SideNav from "../Components/SideNav";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
    console.log("toggleclicked");
    console.log(isOpen);
  }
  return (
    <>
      <SideNav isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <Navbar toggleIsOpen={toggleIsOpen} />
      <IntroPage />
      <AboutPage />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
