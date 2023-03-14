import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Style.css';


function Navbar() {
  return (
    
    <div className="Navbar">
    <Link className="NavbarLink" to="/">About Me</Link>
    <Link className="NavbarLink" to="/portfolio">Portfolio</Link>
    <Link className="NavbarLink" to="/contact">Contact</Link>
    <Link className="NavbarLink" to="/resume">Resume</Link>
    </div>
  );
}

export default Navbar;