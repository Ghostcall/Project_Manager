import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import oma from '../../assets/OLE_7534.jpg.jpeg'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (

    <div className='hero'>

        {/* <video autoPlay loop muted className="video-bg">
            <source src={videoBg} type="video/mp4" />
        </video> */}

        <div className="hero_info">

            <div className="left-col">

                <span className='hello'>
                    <Typewriter
                      words={["HELLO!"]}
                      cursor
                      loop={true}
                      key={Date.now()}
                      backspeed={100}
                      typeSpeed={500}
                    //   cursorStyle={"."}
                    />                
                </span>

                <span className='typewriter-text'>
                    <Typewriter
                      words={["I'm Lydia Wakonyu!"]}
                      loop={true}
                      key={Date.now()}
                      backspeed={100}
                      typeSpeed={500}
                      cursorStyle={"."}
                    />
                </span>
                <h5><span>An</span> ICT Project Manager<hr /> </h5>
                
                

                <p className='product'>I have led high-impact ICT initiatives shaping technology talent across Sub-Saharan Africa. With over 5 years at Huawei 
                  Technologies, I have spearheaded the Huawei ICT Competition across 20+ countries in Africa, 
                  aligning tech execution with global talent development strategy while strengthening regional ICT ecosystems.
                </p>
                <br />
                
                <p className='program'>
                    {/* Currently, I'm building digital products for a fintech company and 
                    leading business cooperatives to serve over 300,000 cooperative 
                    groups across Nigeria. */}
                </p>
               
               <div className="hire">
               <a href='mailto:lydiawakonyus@gmail.com' target="_blank" rel="noopener noreferrer">Hire Me!</a>
               </div>

                <p className='contact-me'><span>C</span>ontact Me Now! <hr /></p>
                
                <div className="social-icons">
            
                    <a href="https://www.linkedin.com/in/lydia-waruguru?trk=blended-typeahead" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/lydia_wakonyu" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/wakonyu__" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a> 

                </div>
            </div>
           
        
            <div className="right-col">
                <img src={oma} alt="" className="hero-image" />
            </div>
        </div>

    </div>


  )
}

export default Hero









