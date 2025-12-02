import Navbar from './navbar'
import './index.css'
import person from './assets/person.png'

export default function Homepage(){
    return (
        <>
        <div>
            <div><Navbar/></div>
            <div className='homePage'>
                <div className='homePage-left'>
                    <h2>Hello Everyone! I am</h2>
                    <h1> Sellamuthu R</h1>
                    <h3>An  Aspiring  Software  development  Enginner,  Fullstack  Developer, with good  knowledge  in  Artificial  Intelligence, cloud  computing  and  academia.</h3>
                </div>
                <div className='homePage-right   rounded-circle'>
                    <img src={person} alt="Image not Found" />

                </div>
            </div>
        </div>
        

        </>
    )
}