import React from "react";
import {
  Nav,
  NavbarContainer,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

function Navbar({ toggleIsOpen }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MenuIcon onClick={toggleIsOpen}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" smooth={true} duration={1000}>
                {" "}
                Home{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={1000}>
                {" "}
                About{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={1000}>
                {" "}
                Projects{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={1000}>
                {" "}
                Contact{" "}
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
