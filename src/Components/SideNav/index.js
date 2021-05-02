import React from "react";
import {
  SideNavContainer,
  Icon,
  CloseIcon,
  SideNavWrapper,
  SideNavMenu,
  SideNavLink,
} from "./SideNavElements";

//SideNav will only be displayed on smaller screens instead of displaying full NavBar

function SideNav({ isOpen, toggleIsOpen }) {
  return (
    <SideNavContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggleIsOpen} />
      </Icon>
      <SideNavWrapper>
        <SideNavMenu>
          <SideNavLink to="about" onClick={toggleIsOpen}>
            About
          </SideNavLink>
          <SideNavLink to="projects" onClick={toggleIsOpen}>
            Projects
          </SideNavLink>
          <SideNavLink to="contact" onClick={toggleIsOpen}>
            Contact
          </SideNavLink>
        </SideNavMenu>
      </SideNavWrapper>
    </SideNavContainer>
  );
}

export default SideNav;
