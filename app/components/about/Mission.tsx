import React from 'react'

const Mission = () => {
  return (
    <div className='p-40'>
        <div className="pb-20">
            <h1 className="text-[40px] pb-2 flex items-end">Vision and Mission <span className="text-[#F8C301] text-[40px] font-[700]">.</span></h1>
            <div className="line"></div>
        </div>
        <div className="flex justify-center items-center pb-20">
            <div className="">
                <h1 className="text-[#13901F] text-[25px] pb-2">Vision</h1>
                <p className="text-[18px]">Our company&apos;s vision is is to be the catalyst of growth and security for organizations worldwide by solving complex cybersecurity challenges, minimizing risk, and building resilient, compliant digital environments. We aim to lead the industry by providing innovative, effective, and sustainable data protection solutions.</p>
            </div>
            <div className="px-10">
                <h1 className="text-[#13901F] text-[25px] pb-2">Mission</h1>
                <p className="text-[18px]">Our company&apos;s vision is to create a world where businesses of all sizes are empowered with the tools, knowledge, and frameworks to protect their data, ensuring a secure and privacy-conscious global digital ecosystem.</p>
            </div>

        </div>
        <div className="">
                <h1 className="text-[#13901F] text-[25px] pb-2 mt-5">Values</h1>
                <p className="text-[18px] pb-4">Our company&apos;s values are:
                    <ol>
                        <li>1. Integrity:- We believe in transparent, ethical business practices and prioritize trust in every relationship we build.</li>
                        <li>
                        2. Excellence:- Our commitment to excellence drives us to deliver top-notch solutions that meet the highest standards in data protection and cybersecurity.
                        </li>
                        <li>
                        3. Innovation:- We embrace innovation as a core principle, ensuring that our clients benefit from the latest in cybersecurity advancements.
                        </li>
                        <li>
                        4. Customer-centricity:- Your success is our success. We focus on understanding your needs and delivering solutions that not only meet but exceed your expectation
                        </li>
                    </ol>
                </p>
            </div>
    </div>
  )
}

export default Mission