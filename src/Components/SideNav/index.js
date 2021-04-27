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
          <SideNavLink to="about">About</SideNavLink>
          <SideNavLink to="projects">Projects</SideNavLink>
          <SideNavLink to="contact">Contact</SideNavLink>
        </SideNavMenu>
      </SideNavWrapper>
    </SideNavContainer>
  );
}

export default SideNav;
