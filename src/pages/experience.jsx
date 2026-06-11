import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  FaUserCircle,
  FaCheckCircle,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "../styles/experience.css";

import imgTechsprint from "../assets/experience/Techsprint.png";
import imgLeetcode from "../assets/experience/leetcode.png";
import imgIdeathon from "../assets/experience/Ideathon.png";
import imgNPTEL from "../assets/experience/NPTEL.png";
import imgHackerz from "../assets/experience/Hackerz.png";
import imgInternship from "../assets/experience/internship.png";

const experienceData = [
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "Organizing Team Member - Codeathon (Hackerz '26).Managed large-scale registrations and rapid on-spot scaling for a state-wide, two-round DSA tournament.Collaborated closely with departmental leadership and peers to coordinate event logistics seamlessly.Developed practical skills in rapid problem-solving, team management, and public leadership.",
    image: imgHackerz,
    timestamp: "2:15 PM · Feb 8, 2026",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_hackerz-codeathon-dsa-activity-7428141465211568128-WvFW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "Application Developer Intern — Betshoow (MedTech Startup).Selected by the Founder & CEO to join the engineering team at Betshoow. Tasked with building and scaling production-ready full-stack applications and responsive web apps. Responsible for managing the complete deployment pipeline and cloud hosting infrastructure to support medical equipment software ecosystems.",
    image: imgInternship,
    timestamp: "10 AM . Oct 28, 2025",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_betshoow-activity-7390984462957875200-4iCL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "National Finalist - Ideathon @ IIITDM Kancheepuram E-Summit.Advanced to the final round as one of the top teams competing against 100+ groups nationwide.Collaborated within Team SILVERSHADE to build, refine, and present an innovative solution under high-pressure judging panels.Gained invaluable mentorship, hands-on experience in rapid prototyping, and critical pitching skills at a premier national institute.",
    image: imgIdeathon,
    timestamp: "9:30 AM · Mar 15, 2026",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_ideathon-esummit-silvershade-activity-7424508097022550016-2Xx4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "5th Place Overall - TechSprint Hackathon (GDG on Campus CIT). Outperformed 300+ competing teams in the initial phase and advanced through the Top 50 in-person live round.Co-developed PriceFixer AI, an impact-driven application engineered to tackle complex, real-world societal problems. Successfully managed end-to-end execution from rapid prototype architecture to final auditorium stage pitching under intense judging criteria.",
    image: imgTechsprint,
    timestamp: "11:45 AM · Jan 22, 2026",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_techsprint-gdg-hackathon-activity-7419719683534282752-TIX5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "National Topper - IIT Kharagpur IoT Certification.  Placed in the elite Top 2% nationwide out of thousands of engineering participants. Graduated with an overall 90% score (Assignment: 24.16/25 | Proctored Exam: 65/75).Validated hands-on knowledge in embedded hardware, wireless sensor interoperability, and data analytics.",
    image: imgNPTEL,
    timestamp: "4:00 PM · Dec 10, 2025",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_i-am-happy-to-share-that-the-results-for-activity-7398316168828071936-EnA4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
  {
    name: "Sellamuthu R",
    handle: "@sellamuthu_r",
    dp: null,
    description:
      "500 Algorithm Milestones — Consistent Problem Solving.Evolved a casual peer-group challenge into a rigorous daily routine of programmatic problem-solving. Deeply mastered foundational Data Structures, Object-Oriented Programming (OOPS), and  Dynamic Programming (DP) paradigms. Developed a sharp intuition for edge-case analysis, pattern recognition, and micro-optimizing time/space runtime complexities.",
    image: imgLeetcode,
    timestamp: "10:20 AM · Nov 5, 2025",
    linkedIn:
      "https://www.linkedin.com/posts/sellamuthu-ramu-3b3390327_today-i-am-excited-to-share-that-i-have-activity-7328058032829947904-SMzg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ1rzcBUnorXEiaOA1YBoM-x1-tSzeE5zU",
  },
];

export default function Experience() {
  return (
    <>
      <Navbar />

      <div className="experience-page">
        <h1 className="experience-title">Professional Experience</h1>

        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <motion.div
              className="tweet-card"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="tweet-header">
                <div className="tweet-avatar">
                  {item.dp ? (
                    <img src={item.dp} alt="avatar" />
                  ) : (
                    <FaUserCircle />
                  )}
                </div>
                <div className="tweet-author">
                  <span className="tweet-name">
                    {item.name}
                    <FaCheckCircle className="blue-tick" />
                  </span>
                  <span className="tweet-handle">{item.handle}</span>
                </div>
                <FaTwitter className="tweet-brand" />
              </div>

              <p className="tweet-text">{item.description}</p>

              <div
                className="tweet-image"
                onClick={() => window.open(item.linkedIn, "_blank")}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt="experience"
                    className="tweet-image-src"
                  />
                ) : (
                  <div className="tweet-image-placeholder">
                    <span>Project Snapshot</span>
                  </div>
                )}
              </div>

              <div className="tweet-footer">
                <span className="tweet-timestamp">{item.timestamp}</span>
                {item.linkedIn && (
                  <a
                    href={item.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tweet-linkedin-link"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
