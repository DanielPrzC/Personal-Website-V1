  
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";

import { Section } from "../GlobalStyles";

// -------------------- Styling Parameters -------------------- //

const Title = styled.h1`
  color: #495464;
  font-family: "Roboto-Mono", monospace;
  font-size: clamp(100px, 25vw, 200px);
  line-heigth: 1;
  text-align: center;
`;
const SubT = styled.h2`
  color: #bbbfca;
  font-family: "Poppins", sans-serif;
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 300;
  line-heigth: 1;
  text-align: center;
  margin-bottom: 3rem;
`;

// -------------------- Animation Parameters -------------------- //

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, delay: 2 },
  },
};

// -------------------- Final Component -------------------- //

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Section
        notfound
        variants={sectionVariants}
        initial="hidden"
        animate="show"
      >
        <Title>404</Title>
        <SubT>Page not found!</SubT>
        <Link to="/">
          <CTAButton cta>Go Back</CTAButton>
        </Link>
      </Section>
      <Footer />
    </>
  );
};

export default NotFound;