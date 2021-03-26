import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <>
      <Section
        technical
        id={id}
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
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
