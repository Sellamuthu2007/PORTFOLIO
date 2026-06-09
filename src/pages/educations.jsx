import React from "react";
import { FaGraduationCap } from "react-icons/fa";

import Navbar from "../componenets/navbar";
import Footer from "../componenets/footer";

import ScrollStack, {
  ScrollStackItem,
} from '../componenets/reactbits/scrollStack'

import "../styles/educations.css";

const educationData = [
  {
    degree: "Bachelor of Engineering - Computer Science",
    institution: "Chennai Institute of Technology",
    duration: "Sept 2024 - Present",
    location: "Chennai, TamilNadu",
    score: "CGPA: 8.97",
    points: [
      "Developing expertise in Software Developement,and core CS fundamentals.",
      "Learning  C++, Python, JavaScript, Java and Rust.",
      "Building strong foundations in DSA and problem solving.",
      "Participating in hackathons and competitive programming.",
      "Contributing to open-source and tech communities.",
    ],
  },
  {
    degree: "Diploma in Computer Application(DCA)",
    institution: "SunTech Computer Center",
    duration: "April 2024 - July 2024",
    location: "Ariyalur, TamilNadu",
    score: "CGPA : 9.1",
    points: [
      "Learned basics of computer working and its core components.",
      "Studied C++ Programming language for problem solving.",
      "Learned Microsoft Excel for Enterpise customer management and business calculations.",
      "Worked on various Microsoft products to gain practical knowledge.",
    ],
  },
  {
    degree: "Biology-Math",
    institution: "Swami Senior Secondary School",
    duration: "July 2022 - March 2024",
    location: "Ariyalur, TamilNadu",
    score: "Percentage : 96.5%",
    points: [
      "Specialized in Biology and Mathematics stream.",
      "Deepend my Mathematics and Physics for Engineering",
      "Scored 96.5% marks in the board exams.",
    ],
  },
  {
    institution: "Varadha Vikas Public School(CBSE)",
    duration: "June 2017 - May 2022",
    location: "Perambalur, TamilNadu",
    score: "Percentage : 84.4",
    points: [
      "Completed secondary education with distinction.",
      "Strong academic performance in Mathematics and Science.",
      "Developed interest in computer technology.",
    ],
  },
];

const Education = () => {
  return (
    <>
      <Navbar />

      <div className="education-page">
        <h1 className="education-title">
          Education
        </h1>

        <ScrollStack>
          {educationData.map((edu, index) => (
            <ScrollStackItem key={index}>
              <div className="edu-terminal">

                <div className="terminal-header">
                  <span className="red"></span>
                  <span className="yellow"></span>
                  <span className="green"></span>
                </div>

                <div className="terminal-body">

                  <div className="terminal-command">
                    <span className="prompt">$</span>
                    fetch-education --latest
                  </div>

                  <div className="institution-title">
                    <FaGraduationCap className="grad-icon" />
                    {edu.institution}
                  </div>

                  <h2 className="degree-title">
                    {edu.degree}
                  </h2>

                  <div className="education-meta">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="education-score">
                    {edu.score}
                  </div>

                  <ul className="education-points">
                    {edu.points.map((point, idx) => (
                      <li key={idx}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      <Footer />
    </>
  );
};

export default Education;