import React from "react";
import styled from "styled-components";

import Icon from "./icons/Icon";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
  &:nth-last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 550px;
  img {
    width: 100%;
    border-radius: 6px;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProjectInfo = styled.div`
  max-width: 420px;
  color: #495464;
  font-family: "Poppins", sans-serif;
  text-align: right;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    position: relative;
    margin: 0 0 0 auto;
    top: 25%;
  }
  @media (max-width: 480px) {
    top: 35%;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  background-color: #495464;
  border-radius: 4px;
  color: #f4f4f2;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: none;
    color: #495464;
    padding: 0;
  }
`;

const TechUsed = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  p {
    font-family: "Roboto Mono", monospace;
    font-size: 0.75rem;
    margin-left: 1rem;
  }
`;

const ProjectLinks = styled.div`
  a {
    color: #bbbfca;
    margin-left: 1.5rem;
    &:hover {
      color: #495464;
      transition: all 0.2s ease-in-out;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const ProjectCard = ({ preview, title, description, tech, links }) => {
  return (
    <>
      <CardWrapper>
        <div>
          <ProjectPreview>
            <img src={preview} alt={`${title} preview`} />
          </ProjectPreview>
          <ProjectInfo>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <TechUsed>
              {tech.map((value, index) => {
                return <p key={index}>{value}</p>;
              })}
            </TechUsed>
            <ProjectLinks>
              {links.map((value, index) => {
                return (
                  <a
                    key={index}
                    href={value.website}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name={value.icon} />
                  </a>
                );
              })}
            </ProjectLinks>
          </ProjectInfo>
        </div>
      </CardWrapper>
    </>
  );
};

export default ProjectCard;