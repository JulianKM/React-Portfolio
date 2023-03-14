import React from 'react';
import '../../styles/Style.css';
import Github from "../../styles/github.png"

function Footer() {
  return (
    
    <div className="footer">
    <a href="https://github.com/JulianKM"><img className="footerimg" src={Github} alt="Github icon" /></a>
    </div>
  );
}

export default Footer;