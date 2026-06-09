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
                    "Hai Everyone.",
                    "Create, rise and lead.",
                    "Hello, tech world.",
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                style={{ marginTop: "20px" }}
              >
                <h2>I'm Sellamuthu R</h2>
                <h4 style={{ marginTop: "20px" }}>
                  An aspiring SDE , student at Chennai Institute of Technology
                  with good communication and strong technical skills.
                </h4>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="homePage-left-down"
              >
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
              </motion.div>
            </div>
            <div className="homePage-right   rounded-circle">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.05 }}
                src={person}
                alt="Image not Found"
              />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
