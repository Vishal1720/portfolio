import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Education from './Education'
import Intro from './Intro'
import Skills from './Skills'
import Prizes from './Prizes'
function App() {
  return (
    <>
<Nav></Nav>      
<Intro></Intro>
        <Education></Education>
        <Skills></Skills>
        <Prizes></Prizes>
    </>
  )
}

export default App
