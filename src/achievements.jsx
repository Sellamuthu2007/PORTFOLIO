import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "./navbar"
import Footer from "./footer"
export default function Achievement(){
    const hackDetails = [
        {
            "id" : 1,
            "name" : "All India Developers Challenge(AIDC)",
            "organizer" : "Samrat Ashok Technological Institute (SATI), Vidisha",
            "Achievement" : "Shortlisted to Pre-Final Round",
        },
        {
            "id" : 2,
            "name" : "Retail Media Hackathon",
            "organizer" : " Tesco Retail Media",
            "Achievement" : "Shortlisted to Final Round",
        },
        {
            "id" : 3,
            "name" : "Google developers Chanllenge",
            "organizer" : "Google developers",
            "Achievement" : "Participation in Round 1"
        },
        {
            "id" : 4,
            "name" : "Google developers Chanllenge",
            "organizer" : "Google developers",
            "Achievement" : "Participation in Round 1"
        }
        
    ]
    return(
        <>
            <div>
                    <Navbar/>
            </div>
            <div className="achievements-hero">
                <h1>My achievements</h1>
            </div>
            <div className="hackathonPage">
                {
                    hackDetails ? (
                    
                        hackDetails.map((details,index)=>(
                                <motion.div className="hackathonPage-box"
                                    initial = {{opacity : 0, y : -40 , scale : 0.9}}
                                    animate = {{opacity : 1, y : 0 , scale : 1.0}}
                                    transition={{
                                        duration: 0.9,
                                        delay: index * 0.5, // stagger effect
                                        type: "spring",
                                        stiffness: 80,
                                         
                                    }}
                                    whileHover={{ scale : 1.05}}                                                                
                                >                               
                                    <div><h5>Hackathon Name : {details.name}</h5></div>
                                    <div><h5>Organizer : {details.organizer}</h5></div>
                                    <div><p>Achievement : {details.Achievement}</p></div>
                                    <div><p href={details.repoLink}>Project : {details.project}</p></div>
                                    <div className="icons">
                                        <div><i class="bi bi-github"></i></div>
                                        <div><i class="bi bi-linkedin"></i></div>
                                    </div>
                                </motion.div>
                            
                        ))                  
                    
                    ):(
                        <p>Hackathons List Not found</p>
                    )
                }        
            </div>    
            <div style = {{"padding" : "20px"}}>
                <Footer/>  
            </div>  
        
        </>
    )

}