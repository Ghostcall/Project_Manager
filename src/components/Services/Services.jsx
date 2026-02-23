import React from 'react'
import './Services.css'
const Services = () => {
  return (

    <div className='service' id='services'>
            <h3 className='service-title'>Services I Offer.</h3>

            <div className="service-description">
                    <div className="service1">
                        <h4>1</h4>
                        <div className="service-topic">
                            <h5>ICT Program Leadership & Management</h5>
                            <p>Driving large-scale multi-countires ICT initiatives and technology competitions.</p>
                        </div>                        
                    </div>

                    <div className="service2">
                        <h4>2</h4>
                        <div className="service-topic">
                            <h5>Technical Training & AI Development</h5>
                            <p>Delivering hands-on training in Networking, Cloud Computing, AI, and Big Data..</p>
                        </div>
                    </div>

                    <div className="service3">
                        <h4>3</h4>
                        <div className="service-topic">
                            <h5>Mentorship & Talent Development</h5>
                            <p>Empowering students and faculty to achieve global competitiveness in technology..</p>
                        </div>
                    </div>

                    <div className="service4">
                        <h4>4</h4>
                        <div className="service-topic">
                            <h5>Innovation & Hackathon Strategy</h5>
                            <p>Designing AI hackathons and digital innovation platforms that advance emerging technologies.</p>
                        </div>
                    </div>                    
            </div>

    </div>

  )
}

export default Services
