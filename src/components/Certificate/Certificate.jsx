import React from 'react'
import './Certificate.css'
import hcia from '../../assets/HCIA-Datacom(pic).jpg'
import hcip from '../../assets/HCIP-Datacom.jpg'
import digital from '../../assets/Screenshot 2026-02-28 020013.png'
import intelli from '../../assets/hsca-intelli.png'
import ip from '../../assets/ip.png'
import storage from '../../assets/storage.png'
import hciadatacom from '../../assets/HCIA Datacom.pdf'
import hcipdatacom from '../../assets/HCIP Certificate.pdf'
import hcsadigital from '../../assets/HCSA Digital Power.pdf'
import hcsaintelligent from '../../assets/HCSA Intelligent collaboration.pdf'
import hcsaipnetwork from '../../assets/HCSA IP Network.pdf'
import hcsastorage from '../../assets/HCSA Storage.pdf'

const Certificate = () => {
  return (
    <div className='certificates' id='certificate'>
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

                    <a href={hciadatacom}>View Certificate</a>

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
                    <a href={hcipdatacom}>View Certificate</a>

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
                    <p>
                        Completed Huawei HCSA-Digital Power Certification covering digital energy 
                        solutions, solar power systems, UPS, data center power infrastructure, and smart energy management.
                    </p>
                    <a href={hcsadigital}>View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {intelli} alt="" />
                    <h3>
                        <span>HCSA</span> Intelligent Collaboration
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>
                        Completed Huawei HCSA-Intelligent Collaboration Certification covering 
                        unified communications, VoIP, video conferencing, and collaboration system fundamentals.
                    </p>
                    <a href={hcsaintelligent}>View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {ip} alt="" />
                    <h3>
                        <span>HCSA</span> IP Network Sales Specialist
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>
                        Completed Huawei HCSA – IP Network Sales Specialist Certification
                         covering network solutions, enterprise product knowledge, and customer-focused sales strategies.
                    </p>
                    <a href={hcsaipnetwork}>View Certificate</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {storage} alt="" />
                    <h3>
                        <span>HCSA</span> Storage
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>
                       Completed Huawei HCSA-Storage Certification covering storage fundamentals, 
                       SAN/NAS, RAID, data protection, and basic storage management.
                    </p>
                    <a href={hcsastorage}>View Certificate</a>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Certificate
