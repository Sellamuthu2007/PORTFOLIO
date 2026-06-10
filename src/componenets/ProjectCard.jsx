import React from "react";
import "../styles/projects.css";

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  achievements,
  github,
}) => {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img
          src={image || "/placeholder-project.png"}
          alt={title}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h2 className="project-title">{title}</h2>

        <p className="project-description">{description}</p>

        <section className="project-section">
          <h3>Tech Stack</h3>

          <ul className="tech-stack-list">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <a
          href={github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <i className="bi-github"></i>
          View on GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
