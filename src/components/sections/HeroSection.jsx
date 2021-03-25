import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CTAButton from "../CTAButton";
import { Section } from "../../GlobalStyles";

// -------------------- Styling Parameters -------------------- //

const HeroIntro = styled(motion.h1)`
  color: #495464;
  font-family: "Roboto Mono", monospace;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const HeroH1 = styled(motion.h1)`
  color: ${(props) => (props.tagline ? "#BBBFCA" : "#495464")};
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const HeroP = styled(motion.p)`
  margin-top: 1rem;
  color: #495464;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  max-width: 420px;
  text-align: left;
  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const BtnWrapper = styled(motion.div)`
  margin-top: 3rem;
`;

// -------------------- Animation Parameters -------------------- //

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 2, staggerChildren: 0.1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4 },
  },
};

// -------------------- Final Component -------------------- //

const HeroSection = ({ tagline }) => {
  return (
    <Section hero variants={sectionVariants} initial="hidden" animate="show">
      <div>
        <HeroIntro variants={textVariants}>Hi, my name is</HeroIntro>
        <HeroH1 variants={textVariants}>Daniel Pérez.</HeroH1>
        <HeroH1 tagline variants={textVariants}>
          I build stuff for the web.
        </HeroH1>
        <HeroP variants={textVariants}>
          I’m a self-taught front-end web developer based in Buenos Aires,
          Argentina. I’m specializing in building (and sometimes designing)
          great websites and applications.
        </HeroP>
      </div>
      <BtnWrapper variants={textVariants}>
        <a href="mailto:daniel.prz.c@gmail.com">
          <CTAButton cta>Get in Touch</CTAButton>
        </a>
      </BtnWrapper>
    </Section>
  );
};

export default HeroSection;