import React from 'react'
import prize from './achievement.png'
import first from './first-icon.webp'
import second from './second-icon.webp'
const Prizes = () => {
  return (<>
  <h1 className='marginplease' id='prizehead' > Prizes</h1>
  <h1 className='marginplease' id='prizehead' style={{fontSize:'2rem'}}> Inter College Coding Events</h1>
    <div id='prizes' className='subcomponent'>
<div style={{width:'80vw',fontSize:'2rem',textAlign:'center'}}>
  <table >
    <tr>
    <td className='td1'><img src={first} style={{width:'5rem'}} alt="" /></td>
    <td className='td2'>Medha Fest 23-SDIT College Kenjar</td>
    </tr>
  <tr className='tr1'>
    <td className='td1'><img src={second} style={{width:'5rem'}} alt="" />
  </td>
  <td className='td2'>Razzmatazz Fest 24-Dr NSAM College Nitte</td>
  </tr>
  <tr className='tr1'>
    <td className='td1'><img src={second} style={{width:'5rem'}} alt="" />
  </td>
  <td className='td2'>Samagra Fest 24-Sharada College Thallapady</td>
  </tr>
  </table>
  


</div>
    <img src={prize} style={{width:'495px',marginTop:'-60px'}} alt="" /></div>
    </>
  )
}

export default Prizes