import pfp from './pfp2.png'
import linkedin from './linkedin-app-icon.webp'
import github from './github-light-icon.png'
import gmail from './gmail-icon.webp'
import blogger from './blogger-round-color-icon.webp'
import intro from './home-color-icon.webp'
import book from './edu.webp'
import skill from './web-development-icon.webp'
import prize from './prize-icon.png'
function Nav(){return(
    <>
    <div id='nav' className='center'>
    <h1 className='center' id='myname'>Vishal Shetty</h1>
    <img  src={pfp} id='pfp'></img><br></br>
    <div className="links">
    <a href='https://www.linkedin.com/in/vishalshetty17/' target='_blank'><img src={linkedin} id='linkedin'></img></a>
    <a href="https://github.com/Vishal1720" target='_blank'><img src={github} id='github'></img></a>
    <a href="mailto:vishal198shetty@gmail.com" target='_blank'><img src={gmail} id='gmail'></img></a>
    <a href="https://codeflix2u.blogspot.com/2023/06/basic-steps.html" target='_blank'><img src={blogger} id='blogger'></img></a><br></br>
    </div>
    <div className="linksContainer">
    
    <img id='homeicon' src={intro}></img>
    <a href='#intro' id='homelink'>About Me</a>
    
    <img id='homeicon' src={book}></img>
    <a href='#eduhead' id='educationlink'>Education</a>
    <img id='homeicon' src={skill}></img>
    <a href='#skillhead' id='skillslink'>Skills</a>
    <img id='homeicon' src={prize}></img>
    <a href='#prizehead' id='prizeslink'>Awards</a>
    </div>
    </div>
    
    
    </>
);
}

export default Nav