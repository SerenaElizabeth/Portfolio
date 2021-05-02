import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

//Menu Icon should only be visible on smaller screens. When icon is clicked, displays side nav
export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

//NavMenu contains nav items with the links to about/projects/contact, display only large screens
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;
  padding: 0;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

//NavItem is the container for each link i.e. About / Projects / Contact
export const NavItem = styled.li`
  height: 80px;
`;

//Link is react scroll link. Links to relevant page
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #9966cc;
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #000;
  }
`;
