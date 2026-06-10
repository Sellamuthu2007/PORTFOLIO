import React from "react";
import { motion } from "framer-motion";

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
  "Frontend & Design": [
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss />, color: "#1572B6" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  ],

  Backend: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
  ],

  "Programming Languages": [
    { name: "Java", icon: <FaJava />, color: "#ED8B00" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "C++", icon: <TbBrandCpp />, color: "#00599C" },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  ],

  Tools: [
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ],
};
const Skills = () => {
  return (
    <>
      <Navbar />

      <div className="skills-page">
        <h1 className="skills-title">My Skills</h1>
        {Object.entries(skills).map(([category, items], sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          return (
            <section className="skill-section" key={category}>
              <h2>{category}</h2>

              <div className="skills-grid">
                {items.map((skill, cardIdx) => (
                  <motion.div
                    className="skill-card"
                    key={skill.name}
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: cardIdx * 0.12,
                      ease: "easeOut",
                    }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>

                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Skills;
