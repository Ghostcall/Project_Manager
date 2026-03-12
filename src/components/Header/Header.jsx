import './Header.css'
import React, { useState } from "react";
import { Link } from "react-scroll"; // only this Link is needed
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  

  return (

    <div className="header" id='header'>
        
        <div className="logo">
              <li>
                <Link to="#home" smooth={true} duration={500} onClick={closeMenu}>
                  <h3><span className="brand">LW</span>Lydia.</h3>
                </Link>
              </li> 
        </div>
        <div className="navbar">
            
            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#certificate" onClick={closeMenu}>Certifications</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </div>

  )
}

export default Header
