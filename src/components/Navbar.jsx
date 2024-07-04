import React from 'react';
import logo from '../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

 
const Navbar = () => {

  return (
    <nav>
        <a 
            href="https://front.gonza.gr/" 
            target="_blank"
        >
            <img src={logo} alt="logo" className='logo' /> 
        </a>
        <a 
            href="https://github.com/gonzagramaglia/notes" 
            className='github-logo-container'
            target="_blank"
        >
            <FaGithub size={23} style={{ color: '#a9a6c3' }} />
        </a>
    </nav>
  )
}

export default Navbar
