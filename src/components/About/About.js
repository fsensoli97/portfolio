import profilePic from '../../images/profile_art_removebg.png'
import './About.css'

export default function About() {
    return(
        <>
            <div className='aboutContainer'>
                <div className='aboutText' style={{fontSize: 'x-large'}}>
                    Ciao, sono Federico.
                </div>
                <div className='aboutPicContainer'>
                    <img className='aboutPic' src={profilePic} alt="me"></img>
                </div>
                <div className='aboutText'>
                    Creo siti web per piccole aziende.
                </div>
            </div>
        </>
    );
}