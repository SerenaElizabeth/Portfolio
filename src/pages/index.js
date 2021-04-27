import React, { useState } from "react";
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
    </>
  );
}

export default Home;
