import { motion } from "framer-motion";

import Navbar from "./componenets/navbar";
import Footer from "./componenets/footer";

import "./styles/index.css";

export default function Educations() {
  return (
    <div>
      <div className="w-20">
        <Navbar />
      </div>
      <div className="education-box">
        {data ? (
          data.map((details, index) => {
            return (
              <motion.div
                className="edu-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3, // stagger effect
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <h4>{details.type}</h4>
                </div>
                <div>
                  <h3>{details.name}</h3>
                </div>
                <div>
                  <h4>{details.location}</h4>
                </div>
                <div>
                  {details.id != 3 ? (
                    <h4>Percentage : {details.Percentage}</h4>
                  ) : (
                    <h4>CGPA : {details.Percentage}</h4>
                  )}
                </div>
              </motion.div>
            );
          })
        ) : (
          <p>Loading Educations</p>
        )}
      </div>
      <div style={{ padding: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}
