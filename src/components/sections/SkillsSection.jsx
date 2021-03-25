import React from "react";
import styled from "styled-components";

import SkillsIcon from "../SkillsIcon";
import { skills } from "../../DataBase";
import { Section, Header } from "../../GlobalStyles";

// -------------------- Styling Parameters -------------------- //

const StyledP = styled.p`
  color: #495464;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  width: 100%;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
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

const SkillsSection = ({ id }) => {
  return (
    <Section
      technical
      id={id}
      variants={sectionVariants}
      initial="hidden"
      animate="show"
    >
      <Header>Skills</Header>
      <StyledP>
        Here are some of the technologies I've been working with:
      </StyledP>
      <SkillsList>
        {skills.map((skill, index) => {
          return <SkillsIcon key={index} id={skill.icon} title={skill.name} />;
        })}
      </SkillsList>
    </Section>
  );
};

export default SkillsSection;
