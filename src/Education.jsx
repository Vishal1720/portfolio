import studying from './studying.png'
function Education(){
    return(
        <>
        <h1 className='marginplease' id='eduhead' > Education</h1>
        <div id='education' className="subcomponent">
        
            <div className="edudetails">
            <table>
        <tr>
            <th>Education</th><th>Percentage/CGPA</th><th>Year</th>
        </tr>
        <tr>
            <td>BCA</td><td>9.25</td><td>2024</td>
        </tr>
        <tr>
            <td>12th</td><td>87.5%</td><td>2021</td>
        </tr>
        <tr>
            <td>10th</td><td>77.8%</td><td>2019</td>
        </tr>
      
    </table>
            </div>
            <img src={studying} alt="studyingboy" id='studyingboy'></img>
        </div>
        </>
    );
}

export default Education