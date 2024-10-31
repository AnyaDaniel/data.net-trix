'use client'
import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { Inria_Sans } from 'next/font/google'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const inria_sans = Inria_Sans({
   weight: ['300', '400', '700'],
   subsets: ['latin'],
   style: ['normal', 'italic']
  })



const Hero = () => {
  return (
    <main >
        
        <Carousel className='w-[calc(100vw-15px)] ' autoPlay={true} autoFocus={true} showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} showStatus={false} useKeyboardArrows={true} stopOnHover={true} swipeable={true} interval={5000} transitionTime={1000}>
            <div className='bg-[url("/safeguard.jpg")] bg-cover bg-left '>
                <div className="bg-[#00000070] pt-40 pb-24 px-40 text-left text-white">
                  <h1 className="text-[60px] pb-2 flex items-end">Safeguarding Your Data, <br /> Ensuring Compliance</h1>
                  <div className="line"></div>
                  <p className="text-[20px] pt-5 w-2/3  mb-10">In today&apos;s digital age, protecting data is essential for safeguarding your company&apos;s reputation and ensuring operational continuity. At Net-Trix Solutions, we lead the way in data protection and compliance as a licensed Data Protection Compliance Organization with the Nigerian Data Protection Bureau.</p>
                  <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none bg-white hover:text-[#13901F] text-black text-[20px]`}>Get Involved</Link>
                </div>
            </div>
            <div className='bg-[#27592D] '>
                <div className="bg-[#00000070] pt-40 pb-24 px-40 text-left text-white">
                  <h1 className="text-[60px] pb-2 flex items-end">Safeguarding Your Data, <br /> Ensuring Compliance</h1>
                  <div className="line"></div>
                  <p className="text-[20px] pt-5 w-2/3  mb-10">In today&apos;s digital age, protecting data is essential for safeguarding your company&apos;s reputation and ensuring operational continuity. At Net-Trix Solutions, we lead the way in data protection and compliance as a licensed Data Protection Compliance Organization with the Nigerian Data Protection Bureau.</p>
                  <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none bg-white hover:text-[#13901F] text-black text-[20px]`}>Get Involved</Link>
                </div>
            </div>

        </Carousel>
    </main>
  )
}
 
export default Hero