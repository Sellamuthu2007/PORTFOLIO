import { projectData } from "../data/ProjectData";
import ProjectCard from "../componenets/ProjectCard";
import ErrorBoundary from "../componenets/ErrorBoundary";
import Navbar from "../componenets/navbar";
import Footer from "../componenets/footer";

const Projects = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "100px" }}
    >
      <Navbar />

      <div style={{ flex: 1, padding: "40px 20px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "40px", color: "white" }}
        >
          My Projects
        </h1>

        <div className="projects-grid">
          {projectData.map((project) => (
            <ErrorBoundary key={project.title}>
              <ProjectCard {...project} />
            </ErrorBoundary>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
