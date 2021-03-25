import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  max-width: 200px;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 30%;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    filter: grayscale(1) invert(31%) sepia(27%) saturate(328%)
      hue-rotate(176deg) brightness(55%) contrast(96%);
    &:hover {
      filter: none;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const SkillsIcon = ({ id, title }) => {
  return (
    <StyledIcon id={id}>
      <div className="wrapper">
        <acronym title={title}>
          <img src={`../images/skills-icons/${id}.svg`} alt={`${id} Icon`} />
        </acronym>
      </div>
    </StyledIcon>
  );
};

export default SkillsIcon;