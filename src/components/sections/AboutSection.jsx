import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";
import styled from "styled-components";

import { Section, Header } from "../../GlobalStyles";

// -------------------- Styling Parameters -------------------- //

const StyledText = styled.div`
  max-width: 420px;
  @media screen and (max-width: 768px) {
    margin: 0 auto 0;
    max-width: 600px;
  }
  p {
    color: #495464;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    width: 100%;
    @media screen and (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
  p:first-child {
    margin-bottom: 1.5rem;
  }
`;

const StyledPic = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  img {
    width: 100%;
    filter: grayscale(1) invert(31%) sepia(27%) saturate(328%)
      hue-rotate(176deg) brightness(55%) contrast(96%);
    border-radius: 6px;
    &:hover {
      filter: none;
      transition: all 0.2s ease-in-out;
    }
  }
`;

// -------------------- Animation Parameters -------------------- //

const sectionVariants = {
  hidden: { opacity: 0, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6 },
  },
};

// -------------------- Final Component -------------------- //

const AboutSection = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px"
  });

  useEffect(()=> {
    if(inView) {
      controls.start("show");
    }
  }, [controls, inView])

  return (
    <Section
      aboutme
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <Header>About Me</Header>
      <StyledText>
        <div>
          <p>
            I've always been passionated about
            programming and creating things and I've found a great way to
            channel my creativity through web development, combining my
            technical insight with my fussy eye for design, and... I'm also a Mechanical Engineer.
          </p>
          <p>
            I'm a UX/UI enthusiast so I'm focused on creating seamless user
            experiences with clean, efficient and scalable code. I study and
            learn new things everyday and I'm looking for opportunities to work
            with those who are willing to share their knowledgeas much as I want
            to learn.
          </p>
        </div>
      </StyledText>
      <StyledPic>
        <img src="../images/profile-pic.png" alt="Profile Pic" />
      </StyledPic>
    </Section>
  );
};

export default AboutSection;
