import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
} from "./ProjectsElements";
import logo from "../../logo192.png";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectImage src={logo} />
          <ProjectTitle>Boost App</ProjectTitle>
          <ProjectDescription>Info about the project</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={logo} />
          <ProjectTitle>To Do List</ProjectTitle>
          <ProjectDescription>Info about the project</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src={logo} />
          <ProjectTitle>Hangman Game</ProjectTitle>
          <ProjectDescription>Info about the project</ProjectDescription>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
