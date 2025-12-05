import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import './index.css'
import './App.css'
import person from './assets/person.png'


export default function Homepage(){
    const navigate = useNavigate();
    const content = [
        {
            "id" : 1,
            "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!"
        },
        {
            "id" : 2,
            "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! "
        },
        {
            "id" : 3,
            "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!"
        },
        {
            "id" : 4,
            "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!"
        },
        {
            "id" : 5,
            "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!"
        }
    ]
    return (
        <>
        <div>
            <div><Navbar/></div>
            <div>
                <div className='homePage-top'>
                    <div className='homePage-left'>
                        <h2>Hello Everyone! I am</h2>
                        <h1> Sellamuthu R</h1>
                        <h3>An  Aspiring  Software  development  Enginner,  Fullstack  Developer, with good  knowledge  in  Artificial  Intelligence, cloud  computing  and  academia.</h3>
                        <div className="icons">
                            <div><a
                                download= "Sella_Resume"
                                href = '/RESUME.pdf' 
                                target = "_blank"
                                className="btn btn-primary">Resume</a>
                            </div>
                            <div src="https://www.linkedin.com/in/sellamuthu-ramu-3b3390327"><i class="bi bi-linkedin"></i> LinkedIn</div>
                            <div src="https://github.com/Sellamuthu2007"><i class="bi bi-github"></i> Github</div>
                            <div  href="https://mail.google.com/mail/?view=cm&fs=1&to=krssellamuthu2007@gmail.com"><i class="bi bi-envelope"></i> Email</div>
                        </div>
                    </div>
                    <div className='homePage-right   rounded-circle'>
                        <img src={person} alt="Image not Found" />
                    </div>
                </div>
            <div className='homePage-down'>
                <div><h3>About me</h3></div>
                <div className='mass-container'>
                    <div className="container">
                        <div><i class="bi bi-code-slash"></i></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!</p></div>
                    </div>
                    <div className="container">
                        <div><i class="bi bi-braces"></i></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!</p></div>
                    </div>
                    <div className="container">
                        <div><i class="bi bi-journal"></i></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!</p></div>
                    </div>
                </div>
                <div className='mass-container'>
                    <div className="container">
                        <div><i class="bi bi-activity"></i></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. corporis eaque et. Facere, optio!provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!</p></div>
                    </div>
                    <div className="container">
                        <div><i class="bi bi-pencil-square"></i></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. corporis eaque et. Facere, optio!provident eius fugit. Amet cum pariatur consectetur in aperiam aut nulla, modi nobis fugiat beatae corporis eaque et. Facere, optio!</p></div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        

        </>
    )
}