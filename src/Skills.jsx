import React from 'react'
import img from './about2nobg.png'
const Skills = () => {
  return (
    <>
    <h2 className='marginplease' id='skillhead' style={{}}>Skills</h2>
    <div id='skills' className='subcomponent'>
    <img src={img} alt="" id='skillimg'/>
    <div id='skillranges'>
    <label >HTML</label>
<input type="range" value='80' readOnly  className='rangeStyle'></input>
<label >CSS</label>
<input type="range" value='78' readOnly  className='rangeStyle'></input>
<label >JS</label>
<input type="range" value='76' readOnly  className='rangeStyle'></input>
<label >PHP</label>
<input type="range" value='81' readOnly  className='rangeStyle'></input>
<label className='hidden'>Java</label>
<input type="range" value='60' readOnly  className='rangeStyle hidden'></input>
<label className='hidden'>SQL</label>
<input type="range" value='62' readOnly  className='rangeStyle hidden'></input>
<label className='hidden'>Python</label>
<input type="range" value='60' readOnly  className='rangeStyle hidden'></input>
<label >React</label>
<input type="range" value='68' readOnly  className='rangeStyle'></input></div></div>
    </>
  )
}

export default Skills