import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      {props.projects.map((project) => (
        <div className="project">
          <a className="project-title" href={project.appLink} target="_blank">
            {project.title}
          </a>
          <a className="project-photo-anchor" href={project.appLink} target="_blank">
            <img className="project-photo" src={project.src} alt={project.alt}></img>
          </a>
          <p>{project.description}</p>
          <p className="project-links">Visit <a href={project.appLink} target="_blank">{project.title}</a> or see the code on <a href={project.repo} target="_blank">GitHub</a></p>
          <hr className="project-hr" />
        </div>
      ))}
    </>
  );
}
