import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCalendarAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../componenets/navbar";
import Footer from "../componenets/footer";
import "../styles/achievements.css";

const achievementIcons = FaTrophy;

const hackDetails = [
  {
    id: 1,
    name: "All India Developers Challenge (AIDC)",
    description:
      "Competed in a national-level development challenge organized by SATI, Vidisha, solving real-world problems through innovative software solutions.",
    date: "15 March 2025",
    achievement: "Shortlisted to Pre-Final Round",
    github: "",
    linkedin: "",
  },
  {
    id: 2,
    name: "Retail Media Hackathon",
    description:
      "Participated in a corporate hackathon by Tesco Retail Media, focusing on building data-driven retail media solutions.",
    date: "22 April 2025",
    achievement: "Shortlisted to Final Round",
    github: "",
    linkedin: "",
  },
  {
    id: 3,
    name: "Google Developers Challenge",
    description:
      "Engaged in Google's developer challenge, solving algorithmic and system design problems across multiple rounds.",
    date: "10 June 2025",
    achievement: "Participation in Round 1",
    github: "",
    linkedin: "",
  },
  {
    id: 4,
    name: "Google Developers Challenge",
    description:
      "Second edition of the Google Developers Challenge, tackling advanced problem sets and demonstrating technical proficiency.",
    date: "18 August 2025",
    achievement: "Participation in Round 1",
    github: "",
    linkedin: "",
  },
];

export default function Achievement() {
  return (
    <>
      <Navbar />
      <div className="achievements-page">
        <h1 className="achievements-title">My Achievements</h1>

        <div className="achievements-list">
          {hackDetails.map((details, index) => {
            const Icon = achievementIcons;

            return (
              <motion.div
                key={details.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="achievement-icon-wrapper">
                  <Icon />
                </div>

                <div className="achievement-body">
                  <h2 className="achievement-name">{details.name}</h2>

                  <div className="achievement-date">
                    <FaCalendarAlt />
                    <span>{details.date}</span>
                  </div>

                  <p className="achievement-description">
                    {details.description}
                  </p>

                  <div className="achievement-footer">
                    <span className="achievement-badge">
                      <FaMedal />
                      {details.achievement}
                    </span>

                    <div className="achievement-links">
                      <a
                        href={details.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link github"
                        title="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={details.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link linkedin"
                        title="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Footer />
      </div>
    </>
  );
}
