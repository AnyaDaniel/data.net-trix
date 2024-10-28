import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div >
        <div className='bg-[#27592D] md:pl-20 md:flex items-center md:h-screen w-screen '>
            <div className="md:w-[50%] px-4 md:px-0 h-fit text-white">
                <h1 className="font-[500] text-[40px] md:text-[60px] pt-20">Our Data Protection Services</h1>
                <p className="font-[100] text-[20px] pt-5">Innowise offers a wide range of tailored web development services delivered by savvy, experienced specialists to streamline a business workflow, nail a startup, or build a best-seller product that’s perfectly optimized in all the right places. We provide market-leading solutions powered by flexible collaboration, in-depth expertise, and relevant technology wielded by well-tried professionals.</p>
              
            </div>
            <Image src={'/hero.png'} alt='hero' className='right-0 top-16 md:absolute' width={600} height={800} />
        </div>
    </div>
  )
}

export default Hero