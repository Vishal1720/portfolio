import aboutpic from './about1nobg.png'
function Intro(){
    return(
        <>
        <div id='intro' className='subcomponent'>
<h1 id='introhead'>Hi 👋🏼 I am Vishal Shetty </h1>
<div id='about-content'>
<div>
<img src={aboutpic} id='char'></img>
</div>
<div className="tex">
I am an aspiring software developer pursuing my MCA at PIM College, with a solid programming foundation and a CGPA of 9.25 in BCA. I am skilled in HTML, CSS, JavaScript, PHP, and Java, and currently enhancing my expertise by learning React.</div>
<div>
</div>
</div>   
        </div>
        
        </>
    );
}

export default Intro