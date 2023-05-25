import React from 'react';
import logo from '../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

 
const Navbar = () => {

  return (
    <nav>
        <a 
            href="https://www.gonza.uno/" 
            target="_blank"
        >
            <img src={logo} alt="logo" className='logo' /> 
        </a>
        <a 
            href="https://github.com/gonzagramaglia/notes-app" 
            className='github-logo-container'
            target="_blank"
        >
            <FaGithub size={28} style={{ color: 'white' }} />
        </a>
    </nav>
  )
}

export default Navbar
