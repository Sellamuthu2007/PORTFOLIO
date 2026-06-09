import React from "react";

import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import {
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import Navbar from "../componenets/navbar";
import Footer from "../componenets/footer";

import "../styles/skills.css";

const skills = {
  "Programming Languages": [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C++", icon: <TbBrandCpp /> },
  ],

  "Frontend & Design": [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Figma", icon: <SiFigma /> },
  ],

  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],

  Tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

const Skills = () => {
  return (
    <>
      <Navbar />

      <div className="skills-page">
        <h1 className="skills-title">My Skills</h1>
        {Object.entries(skills).map(([category, items]) => (
          <section className="skill-section" key={category}>
            <h2>{category}</h2>

            <div className="skills-grid">
              {items.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>

                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Skills;
