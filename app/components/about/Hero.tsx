import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="relative flex justify-center items-center pt-40 pb-20 px-20">
            <div className="w-2/3">
                <h1 className="pb-2 text-[60px]">About Us</h1>
                <div className="line"></div>
                <p className="pt-5 text-[20px]">At Net-Trix Solutions, we are dedicated to helping businesses safeguard their most valuable asset—data. As a licensed Data Protection Compliance Organization (DPCO) with the Nigerian Data Protection Bureau, we specialize in delivering cutting-edge cybersecurity solutions, compliance audits, and tailored training to ensure that your business remains secure and compliant with local and international standards such as GDPR, CCPA, and NDPR.
                With our expertise spanning across data protection, SOC center setup, firewall management, and cybersecurity training, we empower organizations to build strong cyber resilience while fostering client trust. We are also proud partners with Fortinet, leveraging their global cybersecurity leadership to provide state-of-the-art solutions for our clients.</p>
            </div>
            <div className="about-triangle absolute right-20 bottom-0"></div>
        </div>
    </div>
  )
}

export default Hero