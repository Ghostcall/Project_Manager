// import React from 'react'
// import './Contact.css'
// import cont from '../../assets/IMG_5271.JPG.jpeg'
// import { AiOutlineDownload } from "react-icons/ai";
// import { AiOutlineMail } from "react-icons/ai";
// import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { useRef, useState } from 'react';
// import resume from '../../assets/Lydia WW Resume.pdf'
// import emailjs from '@emailjs/browser'

    import React, { useRef, useState } from 'react';
    import './Contact.css';
    import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
    import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
    import emailjs from '@emailjs/browser';
    import resume from '../../assets/Lydia WW Resume.pdf';

const Contact = () => {
    const maxChars = 300;
    const [message, setMessage] = useState("");
    const email = "lydiawakonyu@gmail.com";
    const subject = "Hiring Inquiry";
    const body = "Hello Lydia,";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const [loading, setLoading] = useState(false);
    const form = useRef();

    //  function Contact() {
    

    const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xa55nz8",   // Gmail service ID
        "template_4wdps65",  // Template ID
        form.current,
        "nbxqF7CIEJh7GeCfI"    // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
            console.log("FULL ERROR:", error);
            alert(error.text || "Something went wrong.");
}
      );
  };

  return (
   <div className='contact' id='contact'>
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
                            <p>📱 +13145993123</p>
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
                        <a href="https://wa.me/13145993123" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={25} color='#25D366' className='whatsapp' /></a>   
                    </div>         
                </div>

                <div className="last-contact-info">

                    <div className="last-contact-info-1">
                        <a href={resume} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}> Download my cv <AiOutlineDownload size={25} /> </a>
                    </div>

                    <div className="last-contact-info-2">
                        
                        <a href={gmailLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}> Send me an email <AiOutlineMail size={25} /> </a>
                    </div>

                </div>
            </div>

            <div className="contact-right">
                <div className="contact-form">
                    <h4>SEND ME A MESSAGE.</h4>
                    <form ref={form} onSubmit={sendEmail} className='form-lydia' >
                        <input type="text" name="from_name" placeholder='Enter Your Name' required />
                        <input type="email" name="from_email" placeholder='Enter Your Email' required />
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
                        <button type="submit" disabled={loading}>
                             {loading ? "Sending..." : "Send Message"}
                         </button>
                    </form>
                </div>

            </div>
           
        </div>
    </div>


           

  )
}

export default Contact;




// import React, { useRef, useState } from 'react';
// import './Contact.css';
// import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
// import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import emailjs from '@emailjs/browser';
// import resume from '../../assets/Lydia WW Resume.pdf';

// const Contact = () => {
//   const maxChars = 300;
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const form = useRef();

//   const email = "lydiawakonyu@gmail.com";
//   const subject = "Hiring Inquiry";
//   const body = "Hello Lydia,";

//   const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_xa55nz8",
//         "template_4wdps65",
//         form.current,
//         "nbxqF7CIEJh7GeCfI"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           form.current.reset();
//           setMessage("");
//           setLoading(false);
//         },
//         (error) => {
//           console.log(error);
//           alert("Something went wrong.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <div className='contact' id='contact'>
//       <h3 className="contact-title">Let's Connect.</h3>

//       <div className="contact-section">

//         <div className="contact-left">

//           <div className="last-contact-info">
//             <div>
//               <a href={resume} target="_blank" rel="noopener noreferrer">
//                 Download my CV <AiOutlineDownload size={20} />
//               </a>
//             </div>

//             <div>
//               <a href={gmailLink} target="_blank" rel="noopener noreferrer">
//                 Send me an email <AiOutlineMail size={20} />
//               </a>
//             </div>
//           </div>

//         </div>

//         <div className="contact-right">
//           <h4>SEND ME A MESSAGE.</h4>

//           <form ref={form} onSubmit={sendEmail}>
//             <input type="text" name="from_name" placeholder="Enter Your Name" required />
//             <input type="email" name="from_email" placeholder="Enter Your Email" required />

//             <textarea
//               name="message"
//               rows={6}
//               placeholder="Enter Message"
//               value={message}
//               onChange={(e) =>
//                 e.target.value.length <= maxChars &&
//                 setMessage(e.target.value)
//               }
//               required
//             />

//             <p>
//               {message.length}/{maxChars} characters
//             </p>

//             <button type="submit" disabled={loading}>
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;