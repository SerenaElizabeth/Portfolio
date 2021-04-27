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

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MenuIcon>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"> About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"> Projects </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"> Contact </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
