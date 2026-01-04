import Navbar from "./navbar"
import './index.css';
import Footer from './footer'
import { motion } from "framer-motion";

export default function Educations(){

    const data = [
        {
            "id" : 1,
            "type" : "Secondary School Leaving Certificates",
            "name" : "Vardha Vikas Public School-VVPS(CBSE) school",
            "location" : "Perambalur,TamilNadu",
            "Percentage" : "84.4%"
        },
        {
            "id" : 2,
            "type" : "Higher Secondary School Certificate",
            "name" : "Swami Marticulation and Higher Seconday School",
            "location" : "Ariyalur,TamilNadu",
            "Percentage" : "96.5%"
        },
        {
            "id" : 4,
            "type" : "Diploma in Computer Application (DCA)",
            "name" : "SunTech Computer Center",
            "location" : "Ariyalur,TamilNadu",
            "Percentage" : "90.5%"
        },
        {
            "id" : 3,
            "type" : "Bachelor of Engineering-B.E(CSE)",
            "name" : "Chennai Institute of Technology",
            "location" : "Chennai,TamilNadu",
            "Percentage" : "8.95"
        }
    ]
    return (
        <div>
            <div className="w-20">
                <Navbar/>
            </div>  
            <div className="education-box">        
                    {
                        data ? (
                            data.map((details,index)=>{
                                return (
                                    <motion.div className="edu-card"
                                        initial = {{opacity : 0, x : -20}}
                                        animate = {{opacity : 1, x : 0}}
                                        transition={{duration: 0.6,
                                                    delay: index * 0.3, // stagger effect
                                                    type: "spring",
                                                    stiffness: 80, }}
                                        whileHover={{scale : 1.05}}
                                    
                                    >
                                    <div><h4>{details.type}</h4></div>
                                    <div><h3>{details.name}</h3></div>
                                    <div><h4>{details.location}</h4></div>
                                    <div>{
                                            details.id != 3 ? (
                                                <h4>Percentage : {details.Percentage}</h4>
                                            ):(
                                                <h4>CGPA : {details.Percentage}</h4>
                                            )
                                        }
                                </div>
                                    </motion.div>
                                )
                            })                
                        ):(
                            <p>Loading Educations</p>
                        )
                        
                    }
            </div> 
            <div style = {{"padding" : "20px"}}>
                    <Footer />
            </div>      
        
        
        </div>
    )
}