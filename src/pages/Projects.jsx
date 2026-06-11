import { motion } from "framer-motion";
import { projectData } from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard";
import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <Navbar />

      <div style={{ flex: 1, padding: "40px 20px" }}>
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <ErrorBoundary>
                <ProjectCard {...project} />
              </ErrorBoundary>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
