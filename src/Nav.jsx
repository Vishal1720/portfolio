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
    <h1 className='center'>Vishal Shetty</h1>
    <img  src={pfp} id='pfp'></img><br></br>
    <a href='https://www.linkedin.com/in/vishalshetty17/'><img src={linkedin} id='linkedin'></img></a>
    <a href="https://github.com/Vishal1720"><img src={github} id='github'></img></a>
    <a href="mailto:vishal198shetty@gmail.com"><img src={gmail} id='gmail'></img></a>
    <a href="https://codeflix2u.blogspot.com/"><img src={blogger} id='blogger'></img></a><br></br>
    <div className="linksContainer">
    
    <img id='homeicon' src={intro}></img>
    <a href='#intro' id='homelink'>About Me</a>
    <img id='homeicon' src={skill}></img>
    <a href='#skills' id='skillslink'>Prog Skills</a>
    <img id='homeicon' src={book}></img>
    <a href='#education' id='educationlink'>Education</a>
    <img id='homeicon' src={prize}></img>
    <a href='#prizes' id='prizeslink'>Achievement</a>
    </div>
    </div>
    
    
    </>
);
}

export default Nav