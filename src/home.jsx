import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "./footer";
import person from "./assets/My_Photo.png";
import Navbar from "./navbar";
import TextType from "../components/TextType";

import "./index.css";
import "./App.css";
import "../components/TextType.css";

export default function Homepage() {
  const navigate = useNavigate();
  const content = [
    {
      id: 1,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!",
    },
    {
      id: 2,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! ",
    },
    {
      id: 3,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!",
    },
    {
      id: 4,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!",
    },
    {
      id: 5,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!",
    },
  ];
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="homePage-top">
            <div className="homePage-left" style={{ marginTop: "130px" }}>
              <div>
                <TextType
                  text={[
                    "Hello Everyone.",
                    "Hello, tech world.",
                    "Create, rise and lead.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  texts={[
                    "Rise, shine, and create.",
                    "Hello, tech world.",
                    "Build some amazing experiences!",
                  ]}
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </div>
              <div style = {{"marginTop" : "20px"}}>
                <h2>I'm Sellamuthu R</h2>
                <h4 style = {{"marginTop" : "20px"}}>
                  An aspiring SDE , student at Chennai Institute of Technology
                  with good communication and strong technical skills.
                </h4>
              </div>
              <div className="homePage-left-down">
                <div>
                  <a
                    download="Sella_Resume"
                    href="/RESUME.pdf"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Resume
                  </a>
                </div>
                <div>
                  <a
                    class="bi bi-linkedin"
                    style={{ color: "white" }}
                    href="https://www.linkedin.com/in/sellamuthu-ramu-3b3390327"
                  ></a>{" "}
                  LinkedIn
                </div>
                <div>
                  <a
                    class="bi bi-github"
                    style={{ color: "white" }}
                    href="https://github.com/Sellamuthu2007"
                  ></a>{" "}
                  Github
                </div>
                <div>
                  <a
                    class="bi bi-envelope"
                    style={{ color: "white" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=krssellamuthu2007@gmail.com"
                  ></a>{" "}
                  Email
                </div>
              </div>
            </div>
            <div className="homePage-right   rounded-circle">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.05 }}
                src={person}
                alt="Image not Found"
              />
            </div>
          </div>
          <div className="homePage-down">
            <div>
              <h3>About me</h3>
            </div>
            <div className="mass-container">
              <div className="container">
                <div>
                  <i class="bi bi-code-slash"></i>
                </div>
                <div>
                  <p>
                    I enjoy transforming ideas into efficient, scalable code. I
                    focus on writing clean logic, optimizing performance, and
                    building solutions that solve real-world problems using
                    modern technologies.
                  </p>
                </div>
              </div>
              <div className="container">
                <div>
                  <i class="bi bi-braces"></i>
                </div>
                <div>
                  <p>
                    My academic journey strengthened my foundations in computer
                    science, problem-solving, and system thinking, enabling me
                    to bridge theoretical concepts with practical software
                    development.
                  </p>
                </div>
              </div>
              <div className="container">
                <div>
                  <i class="bi bi-journal"></i>
                </div>
                <div>
                  <p>
                    I approach challenges with a structured mindset—analyzing
                    requirements, breaking down problems, and delivering
                    reliable solutions through algorithms and thoughtful design.
                  </p>
                </div>
              </div>
            </div>
            <div className="mass-container">
              <div className="container">
                <div>
                  <i class="bi bi-activity"></i>
                </div>
                <div>
                  <p>
                    I am deeply passionate about software engineering,
                    continuously learning new technologies, exploring system
                    architectures, and improving my skills to build impactful
                    digital products.
                  </p>
                </div>
              </div>
              <div className="container">
                <div>
                  <i class="bi bi-pencil-square"></i>
                </div>
                <div>
                  <p>
                    Beyond coding, I enjoy exploring technology trends, learning
                    through hands-on projects, and maintaining a balance through
                    creative thinking and personal growth activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

{
  /* <motion.h2
                            initial = {{opacity : 0 , x : 10}}
                            animate = {{opacity : 1, x: 0}}
                            transition = {{
                                duration: 0.6,
                                delay:   0.3, 
                                type: "spring",
                                stiffness: 80,
                            }}
                            
                        >Hello Everyone! I am
                        </motion.h2>
                        <motion.h1
                            initial = {{opacity : 0 , x : 20}}
                            animate = {{opacity : 1, x : 0}}
                            transition = {{
                                delay : 1.6,
                                duration : 0.5,
                                type: "spring",
                                stiffness: 80,
                            }}
                        > Sellamuthu R</motion.h1>
                        <motion.h3
                            initial = {{opacity : 0, x : 20}}
                            animate = {{opacity : 1, x : 0}}
                            transition = {{
                                duration : 0.5,
                                delay : 2.6,
                                type : "spring",
                                stiffness: 80,
                            }}
                        >An  Aspiring  Software  development  Enginner,  Fullstack  Developer, with good  knowledge  in  Artificial  Intelligence, cloud  computing  and  academia.</motion.h3>
                        <motion.div className="icons"
                            initial = {{opacity : 0, x : 20}}
                            animate = {{opacity : 1 , x : 0}}
                            transition = {{duration : 0.6,
                                delay : 3.6
                            }}
                        >
                            
                        </motion.div> */
}
