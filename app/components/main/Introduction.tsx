import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <div>

        <div className="px-[20px] pt-[150px] pb-[150px] bg-[#13901F] inline-block relative w-full ">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]  lg:w-[250px] lg:h-[250px] bg-white absolute top-0 left-0 triangle"></div>
          <div className="lg:px-60 md:px-40 px-10 w-full md:max-w-[1140px] text-white"><p className="text-[1.5em] lg:max-w-[1140px]">Data is one of     the most valuable assets of any business, and protecting it is crucial. Our data 
                  protection solutions include encryption, regular backups, and data loss prevention (DLP) 
                  tools to ensure that sensitive information is stored securely and is accessible only to 
                  authorized personnel. We also provide disaster recovery solutions to protect against data 
                  loss due to breaches, hardware failures, or natural disasters. </p></div>
            <div className="image-mask absolute bottom-0 right-0 w-[560px] md:w-[660px] lg:w-[718px]">
            <Image src={'/double4.png'} alt='intro image' width={796} height={775} className='.parallax-element'/>
          </div>
        </div>
    </div>
  )
}

export default Introduction