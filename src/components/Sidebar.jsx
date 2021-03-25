import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

import CTAButton from "./CTAButton";

import resume from "../resume/resume-2021.pdf";

const SBContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #495464;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #bbbfca;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

const SBWrapper = styled.div`
  color: #f4f4f2;
  position: absolute;
  top: 10rem;
`;

const SBMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
`;

const SBItem = styled.li`
  margin-bottom: 2.5rem;
  text-decoration: none;
  list-style: none;
`;

const SBLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #f4f4f2;
  cursor: pointer;
  &:hover {
    color: #bbbfca;
    transition: 0.2s ease-in-out;
  }
`;

const SBButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SBContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SBWrapper>
        <SBMenu>
          <SBItem>
            <SBLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              onClick={toggle}
            >
              About
            </SBLink>
          </SBItem>
          <SBItem>
            <SBLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              onClick={toggle}
            >
              Skills
            </SBLink>
          </SBItem>
          <SBItem>
            <SBLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              onClick={toggle}
            >
              Projects
            </SBLink>
          </SBItem>
          <SBItem>
            <SBLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              onClick={toggle}
            >
              Contact
            </SBLink>
          </SBItem>
        </SBMenu>
        <SBButton onClick={toggle}>
          <a href={resume} target="_blank" rel="noreferrer noopener">
            <CTAButton sidebar>Resume</CTAButton>
          </a>
        </SBButton>
      </SBWrapper>
    </SBContainer>
  );
};

export default Sidebar;