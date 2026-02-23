import React from 'react'
import './About.css'
const About = () => {
  return (

    <div className='about'>
       <h3 className="about-title">About Me.</h3>

        <div className="about-description">
            <div className="about-img">
                <img src="/src/assets/Her0872.jpg.jpeg" alt="about" />
            </div>
            <div className="about-descritpion-texts">

                <div className="about-description-text1">
                    <h3>
                        I don’t just coordinate programs, I lead high-impact ICT initiatives that shape the future of 
                        technology talent across Sub-Saharan Africa. For over 5 years at Huawei Technologies, 
                        I have spearheaded the Huawei ICT Competition across 20+ countries, aligning regional execution 
                        with Huawei’s global technology and talent development strategy. <br /> <br /> 
                    </h3>
                </div>
                <div className="gradient-text text-4xl font-bold about-description-text2">
                    <h3>
                        From planning and monitoring large-scale cross-border ICT programs to leading students, trainers and 
                        university partners to Shenzhen, China for the Global Finals, I drive excellence in networking, 
                        cloud computing, AI, and Big Data tracks. <br />
                    </h3>
                </div>
                <div className="about-description-text3">
                    <h3>
                        Through strategic collaboration with universities, 
                        regional Huawei offices, and Ministries of Education, I have expanded participation, strengthened ICT ecosystems, 
                        and mentored 100+ students and faculty annually transforming technical potential into global competitiveness.
                    </h3>
                </div>
                          

            </div>
        </div>

    </div>

  )
}

export default About
