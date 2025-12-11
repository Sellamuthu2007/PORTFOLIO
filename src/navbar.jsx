import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function Navbar(){
    const navigate = useNavigate();

    return (
        
        <>
            <nav className="nav1">
                <div style = {{"borderRadius" : "100px"}}>
                    <h3 className="logo">Sellamuthu R</h3>
                </div>
                 <div className='menu'>
                    <ul>
                        <li><a onClick={()=>navigate('/')}>Home</a></li>
                        <li><a onClick={()=>navigate('/projects')}>Projects</a></li>
                        <li><a onClick={()=>navigate('/hackathons')}>Achievements</a></li>
                        <li><a href="#home">Education</a></li>
                        <li><a href="#home">Certificates</a></li>
                        <li><a href="#home">Volunteering</a></li>
                        <li><a href="#home">Internships</a></li>
                        <li><a href="#home">Contact</a></li>
                        <li><a href="./RESUME.pdf">Resume</a></li>
                    </ul>
                </div>
            </nav>
        
        </>
        
       
    )
}
