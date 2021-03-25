import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

import CTAButton from "./CTAButton";
import IconLogo from "./icons/IconLogo";

import resume from "../resume/resume-2021.pdf";

// -------------------- Styling Parameters -------------------- //

const Nav = styled(motion.nav)`
  background-color: #e8e8e8;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1080px;
  min-width: 350px;
`;

const NavLogo = styled(motion.div)`
  width: 64px;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  text-decoration: none;
  color: #495464;
`;

const HambMenu = styled(motion.div)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
    color: #bbbfca;
    margin-right: 1rem;
  }
`;

const NavWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const NavItem = styled(motion.li)`
  height: 80px;
  font-family: "Roboto Mono", monospace;
`;

const NavLink = styled(LinkS)`
  color: #495464;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    font-weight: 700;
    transition: all 0.2s ease-in-out;
  }
`;

const NavButton = styled(motion.nav)`
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
`;

// -------------------- Animation Parameters -------------------- //

const navVariants = {
  hidden: { y: -80 },
  show: {
    y: 0,
    transition: { duration: 0.6, delayChildren: 1 },
  },
};

const showVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const listVariants = {
  hidden: { y: -80 },
  show: {
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: -80 },
  show: {
    y: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};

// -------------------- Final Component -------------------- //

const Navbar = ({ toggle }) => {
  const history = useHistory();
  const location = useLocation();

  const reload = () => {
    if ( location.pathname !== "/") {
      history.push("/");
    } else {
      history.go();
    }
  };

  return (
    <Nav variants={navVariants} initial="hidden" animate="show">
      <NavContainer>
        <NavLogo onClick={reload} variants={showVariants}>
          <IconLogo />
        </NavLogo>
        <HambMenu onClick={toggle} variants={showVariants}>
          <FaBars />
        </HambMenu>
        <NavWrapper variants={listVariants}>
          <NavMenu>
            <NavItem variants={itemVariants}>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem variants={itemVariants}>
              <NavLink
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem variants={itemVariants}>
              <NavLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem variants={itemVariants}>
              <NavLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavButton variants={itemVariants}>
            <a href={resume} target="_blank" rel="noreferrer noopener">
              <CTAButton navbar>Resume</CTAButton>
            </a>
          </NavButton>
        </NavWrapper>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
