import React from 'react'
import './Certificate.css'
import hcia from '../../assets/HCIA-Datacom(pic).jpg'
import { BiColor } from 'react-icons/bi'
const Certificate = () => {
  return (
    <div className='certificate'>
        <h3 className="certificate-title">Certificate of Completion</h3>

        <div className="certificate-section">
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        <span>HCIA</span> Huawei Certified ICT Associate
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>

                    <a href="/src/assets/HCIA Datacom.pdf">View</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        <span>HCIP</span> Huawei Certified ICT Associate
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>
                    <a href="/src/assets/HCIA Datacom.pdf">View</a>

                </div>
            </div>
            <div className="certificate-container">
                <div className="certificate-up-description">
                    <img src= {hcia} alt="" />
                    <h3>
                        <span>HCIP</span> Huawei Certified ICT Professional
                    </h3>
                </div>
                
                <div className="certificate-down-description">
                    <p>Completed Huawei HCIA-Datacom Certification covering networking fundamentals,
                        IP addressing, routing & switching, WLAN, and basic network security.
                    </p>
                    <a href="/src/assets/HCIA Datacom.pdf">View</a>

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
                    <a href="/src/assets/HCIA Datacom.pdf">View</a>

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
                    <a href="/src/assets/HCIA Datacom.pdf">View</a>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Certificate
