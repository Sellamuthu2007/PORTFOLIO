import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/achievements.css";

import imgIdeathon from "../assets/experience/Ideathon.png";
import imgTechsprint from "../assets/experience/Techsprint.png";
import imgTesco from "../assets/tesco.png";
import imgCSIC from "../assets/CSIC.png";

const achievementData = [
  {
    id: 1,
    name: "CSIC - National Finalist Top 50",
    date: "6 Feb 2026",
    description:
      "Engineered a high-security, automated e-KYC verification engine utilizing cryptographic key pairs and secure data hashing to ensure zero-trust identity authentication.Advanced to the elite Top 50 national teams in a prestigious cybersecurity challenge backed by the Data Security Council of India (DSCI) and the Government of India.",
    image: imgCSIC,
  },
  {
    id: 2,
    name: "TESCO - Retail Media Hackathon National Finalist",
    description:
      "Participated in a corporate hackathon by Tesco Retail Media, focusing on building data-driven retail media solutions.Engineered a visual canvas workspace supporting complex image manipulation, background removal, custom color palette storage, and multi-channel asset export presets under 500KB.",
    image: imgTesco,
    date: "26 Nov 2025",
    linkedIn: "",
  },
  {
    id: 3,
    name: "Ideathon - IIIT Kancheepuram National Finalist",
    date: "31 Jan 2026",
    description:
      "Advanced to the grand final round as a top team, competing in a fierce national pool of 100+ registered groups.Collaborated within team SILVERSHADE to conceptualize, design, and pitch an innovative tech solution under intense hackathon constraints.",
    image: imgIdeathon,
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_ideathon-esummit-silvershade-activity-7424508097022550016-2Xx4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    id: 4,
    name: "GDG - Techsprint Top 5th Finalist",
    description:
      "Secured 5th place overall out of 300+ initial national project submissions, surviving a brutal cut to the top 50 for the live, in-person finals.Co-developed PriceFixer AI with team SILVERSHADE, engineering a rapid, full-stack prototype designed to solve critical, real-world societal issues.",
    date: "20 Jan 2025",
    image: imgTechsprint,
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_techsprint-gdg-hackathon-activity-7419719683534282752-TIX5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
];

function splitBullets(text) {
  return text
    .split(".")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

export default function Achievement() {
  return (
    <>
      <Navbar />
      <div className="achievements-page">
        <h1 className="achievements-title">My Achievements</h1>

        <div className="achievements-list">
          {achievementData.map((details, index) => {
            const bullets = splitBullets(details.description);

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
                <div className="achievement-header">
                  <div className="achievement-header-left">
                    <FaTrophy className="achievement-cup" />
                    <h2 className="achievement-name">{details.name}</h2>
                  </div>
                  <div className="achievement-date">
                    <FaCalendarAlt className="achievement-cal-icon" />
                    <span>{details.date}</span>
                  </div>
                </div>

                <div className="achievement-body">
                  <div className="achievement-image-col">
                    {details.image ? (
                      <img
                        src={details.image}
                        alt={details.name}
                        className="achievement-snapshot"
                        onClick={() =>
                          details.linkedIn &&
                          window.open(details.linkedIn, "_blank")
                        }
                      />
                    ) : (
                      <div className="achievement-image-placeholder">
                        <span>Project Snapshot</span>
                      </div>
                    )}
                  </div>

                  <div className="achievement-desc-col">
                    <ul className="achievement-bullets">
                      {bullets.map((point, i) => (
                        <li key={i}>{point}.</li>
                      ))}
                    </ul>
                    {details.linkedIn && (
                      <a
                        href={details.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-linkedin-link"
                      >
                        <i className="bi bi-link link-icon"></i>View full post
                        on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
