// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const projectData = [
  {
    title: "SilentSOS",
    description: "AI-powered emergency app for women with gesture recognition.",
    tech: "React Native, Node.js, MongoDB",
  },
  {
    title: "RuralMint",
    description: "Blockchain-based rural artisan marketplace with virtual booths.",
    tech: "React, Tailwind, Express, MongoDB",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio website with React + Framer Motion.",
    tech: "React, CSS, AOS",
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="projects-title"
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3, // stagger effect
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
