import studying from './studying.png'
function Education(){
    return(
        <>
        <h1 className='marginplease' id='eduhead' > Education</h1>
        <div id='education' className="subcomponent">
        
            <div className="edudetails">
            <table className='table'>
        <tr className='tr'>
            <th className='th'>Education</th><th className='th'>Percentage/CGPA</th><th className='th'>Year</th>
        </tr>
        <tr className='tr'>
            <td className='td'>BCA</td><td className='td'>9.25</td><td className='td'>2024</td>
        </tr>
        <tr className='tr'>
            <td className='td'>12th</td><td className='td'>87.5%</td><td className='td'>2021</td>
        </tr>
        <tr className='tr'>
            <td className='td'>10th</td><td className='td'>77.8%</td><td className='td'>2019</td>
        </tr>
      
    </table>
            </div>
            <div>
            <img src={studying} alt="studyingboy" id='studyingboy'></img>
            </div>
        </div>
        </>
    );
}

export default Education