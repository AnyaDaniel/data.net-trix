import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="relative flex justify-center items-center pt-40 pb-20 px-20">
            <div className="w-2/3">
                <h1 className="pb-2 text-[60px]">About Us</h1>
                <div className="line"></div>
                <p className="pt-5 text-[25px]">Innowise is a software development and IT consulting company that was founded in 2007. Our company serves IT and non-IT organizations, helping to achieve a variety of goals and objectives with digital solutions and recent trend technologies.</p>
            </div>
            <div className="about-triangle absolute right-20 bottom-0"></div>
        </div>
    </div>
  )
}

export default Hero