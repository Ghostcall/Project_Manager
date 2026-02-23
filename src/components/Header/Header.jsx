import './Header.css'
import React, { useState } from "react";
import { Link } from "react-scroll"; // only this Link is needed
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (

    <div className="header">
        
        <div className="logo">
              <li>
                <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                  <h3><span>L</span>ydia.</h3>
                </Link>
              </li> 
        </div>
        <div className="navbar">
            
            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#certificates">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </div>

  )
}

export default Header
