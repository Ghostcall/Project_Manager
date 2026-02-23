import React from 'react'
import './Contact.css'
import cont from '../../assets/IMG_5271.JPG.jpeg'
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from '@emailjs/browser'
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

const Contact = () => {
    const maxChars = 300;
    const [message, setMessage] = useState("");


  return (
   <div className='contact'>
         <h3 className="contact-title">Let's Connect.</h3>

         <div className="contact-section">

             <div className="contact-left">
                <div className="contact-up">
                    <h4>Look no further, your trusted ICT and technology leadership expert is here</h4>
                     <p>With a proven track record of delivering scalable ICT solutions and driving 
                        cross-functional technology initiatives, I am prepared to lead your projects 
                         from strategy to execution, optimizing digital transformation and unlocking 
                         measurable growth opportunities. <br /> <br />
                         <span style={{color: '#e4d0c8', fontWeight: '700'}}>ARE YOU READY TO COLLABORATE?</span> 
                    </p>

                    <h5>Let’s<span>connect</span>to drive impactful ICT and technology solutions together.</h5>
                </div>

                <div className="contact-down">
                    <div className="contact-down-up">
                        <div className="contact-mail">
                            {/* <p>📧 lydiawakonyu@gmail.com</p> */}
                            <p>📱 +254728710699</p>
                        </div>
                        

                        <div className="contact-add">
                            <p>📍 Saint Louis, Missouri, United States of America</p>
                        </div>
                    </div>

                    <div className="contact-down-social">
                        <a href="https://www.linkedin.com/in/lydia-wakonyu-9b1a4b1b3/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={25} color='#0077B5' className='linkedin' /> </a>
                        <a href="https://www.instagram.com/lydiawakonyu/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25} color='#E1306C' fontWeight={700} className='instagram' /></a>
                        <a href="https://wa.me/254728710699" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={25} color='#25D366' className='whatsapp' /></a>   
                    </div>         
                </div>

                <div className="last-contact-info">

                    <div className="last-contact-info-1">
                        <a href='/public/Lydia WW Resume.pdf' target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}> Download my cv <AiOutlineDownload size={25} /> </a>
                    </div>

                    <div className="last-contact-info-2">
                        
                        <a href="mailto:lydiawakonyu@gmail.com?subject=Inquiry from Product Management&body=Hello Stella," target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}> Send me an email <AiOutlineMail size={25} /> </a>
                    </div>

                </div>
            </div>

            <div className="contact-right">
                <div className="contact-form">
                    <h4>SEND ME A MESSAGE.</h4>
                    <input type="text" placeholder='Enter Your Name' className='name' />
                    <input type="email" placeholder='Enter Your Email' />
                    <textarea 
                        name="message" 
                        id="message"
                        rows={20}
                        placeholder='Enter Message'
                        onChange={(e)=> e.target.value.length 
                        <= maxChars &&  setMessage(e.target.value)}                    
                    required
                    />   
                    <p style={{ color: message.length > maxChars ? "red" : "#e4d0c8", fontSize: "16px", fontWeight: 700 }} >
                        {message.length}/{maxChars} characters
                    </p>              
                    <button>Send Message</button>
                </div>

            </div>
           
        </div>
    </div>


           

  )
}

export default Contact
