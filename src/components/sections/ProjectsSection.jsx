
import React from "react";

import ProjectCard from "../ProjectCard";
import { Section, Header } from "../../GlobalStyles";

import { Projects } from "../../DataBase";

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

const ProjectsSection = ({ id }) => {

  return (
    <>
      <Section
        technical
        id={id}
        variants={sectionVariants}
        initial="hidden"
        animate="show"
      >
        <Header>Projects</Header>
        {Projects.map((project) => {
          return (
            <ProjectCard
              key={project.key}
              preview={project.preview}
              title={project.title}
              description={project.description}
              tech={project.tech}
              links={project.links}
            />
          );
        })}
      </Section>
    </>
  );
};

export default ProjectsSection;