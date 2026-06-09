import React from "react";

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

          <div className="tech-badges">
            {techStack.map((tech) => (
              <span className="tech-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {achievements?.length > 0 && (
          <section className="project-section">
            <h3>Achievements</h3>

            <ul className="achievement-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <a
          href={github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <i className=" bi-github github-btn"></i>
          View on GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
