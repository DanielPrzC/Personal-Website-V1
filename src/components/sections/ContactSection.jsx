import React from "react";
import styled from "styled-components";

import CTAButton from "../CTAButton";
import { Section, Header } from "../../GlobalStyles";

// -------------------- Styling Parameters -------------------- //

const StyledP = styled.p`
  color: #495464;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  max-width: 420px;
  margin-bottom: 3rem;
`;

// -------------------- Animation Parameters -------------------- //

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6 },
  },
};

// -------------------- Final Component -------------------- //

const ContactSection = ({ id }) => {
  return (
    <Section
      contact
      id={id}
      variants={sectionVariants}
      initial="hidden"
      animate="show"
    >
      <Header contact>Get In Touch</Header>
      <StyledP>
        Whether you have an idea for a project or just want to chat, feel free
        to send me an email!
      </StyledP>
      <a href="mailto:daniel.prz.c@gmail.com">
        <CTAButton cta>Say Hello</CTAButton>
      </a>
    </Section>
  );
};

export default ContactSection;
