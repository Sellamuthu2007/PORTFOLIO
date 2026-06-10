import { motion } from "framer-motion";

import Footer from "../componenets/footer";
import person from "../assets/My_Photo.png";
import Navbar from "../componenets/navbar";
import TextType from "../componenets/reactbits/TextType";

import "../styles/global.css";
import "../styles/homePage.css";
import "../componenets/reactbits/TextType.css";

export default function Homepage() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="homePage-top">
            <div className="homePage-left" style={{ marginTop: "130px" }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ marginTop: "20px" }}
              >
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
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ marginTop: "20px" }}
              >
                <h2>I&apos;m Sellamuthu R</h2>
                <h4 style={{ marginTop: "20px" }}>
                  An aspiring SDE, student at Chennai Institute of Technology
                  with good communication and strong technical skills.
                </h4>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
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
                    className="bi bi-linkedin"
                    style={{ color: "white" }}
                    href="https://www.linkedin.com/in/sellamuthu-ramu-3b3390327"
                  ></a>{" "}
                  LinkedIn
                </div>
                <div>
                  <a
                    className="bi bi-github"
                    style={{ color: "white" }}
                    href="https://github.com/Sellamuthu2007"
                  ></a>{" "}
                  Github
                </div>
                <div>
                  <a
                    className="bi bi-envelope"
                    style={{ color: "white" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=krssellamuthu2007@gmail.com"
                  ></a>{" "}
                  Email
                </div>
              </motion.div>
            </div>
            <div className="homePage-right   rounded-circle">
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
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
