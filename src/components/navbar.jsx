import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="nav1">
      <h3 className="logo">Sellamuthu R</h3>
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <a onClick={() => handleNav("/")}>Home</a>
          </li>
          <li>
            <a onClick={() => handleNav("/projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleNav("/skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => handleNav("/hackathons")}>Achievements</a>
          </li>
          <li>
            <a onClick={() => handleNav("/educations")}>Education</a>
          </li>
          <li>
            <a onClick={() => handleNav("/experience")}>Experience</a>
          </li>
          <li>
            <a href="./RESUME.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
