import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { darkMode } from '../../context/context';

function About() {
  const {state,ChangeMode} = useContext(darkMode);
 
  return (
    <div>
    
    </div>
  )
}

export default About
