import React from 'react'
import './Certificate.css'
import hcia from '../../assets/HCIA-Datacom(pic).jpg'
import hcip from '../../assets/HCIP-Datacom.jpg'
import digital from '../../assets/Screenshot 2026-02-28 020013.png'

const Certificate = () => {
  return (
    <div className='certificate'>
        <h3 className="certificate-title">Certificate of Completion</h3>

        <div className="certificate-section">
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        <span>HCIA</span> Datacom
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>

                    <a href="/src/assets/HCIA Datacom.pdf">View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcip} alt="" />
                    <h3>
                        <span>HCIP</span> Datacom
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>
                        Completed Huawei HCIP-Datacom Certification covering advanced routing protocols,
                         enterprise switching, network optimization, troubleshooting, and secure network design
                    </p>
                    <a href="/src/assets/HCIP Certificate.pdf">View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {digital} alt="" />
                    <h3>
                        <span>HCSA</span> Digital Power
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCSA-Digital Power Certification covering data center power systems, 
                        UPS technologies, energy storage, photovoltaic (solar) systems and intelligent power management solutions.
                    </p>
                    <a href="/src/assets/HCSA Digital Power.pdf">View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        HCIA - Huawei Certified ICT Associate
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>
                    <a href="/src/assets/HCIA Datacom.pdf">View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        HCIA - Huawei Certified ICT Associate
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>
                    <a href="/src/assets/HCIA Datacom.pdf">View Certificate</a>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Certificate
