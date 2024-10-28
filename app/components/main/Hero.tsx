import React from 'react'
import Link from 'next/link'
import { Inria_Sans } from 'next/font/google'

const inria_sans = Inria_Sans({
   weight: ['300', '400', '700'],
   subsets: ['latin'],
   style: ['normal', 'italic']
  })



const Hero = () => {
  return (
    <main >
        <div className='bg-[#27592D] pt-40 pb-20 px-40 w-screen text-white'>
            <h1 className="text-[60px] pb-2 flex items-end">Safeguarding Your Data, <br /> Ensuring Compliance</h1>
            <div className="line"></div>
            <p className="text-[20px] pt-5 w-2/3  mb-10">In today&apos;s digital age, protecting data is essential for safeguarding your company&apos;s reputation and ensuring operational continuity. At Net-Trix Solutions, we lead the way in data protection and compliance as a licensed Data Protection Compliance Organization with the Nigerian Data Protection Bureau.</p>
            <Link href='/services' className={`${inria_sans.className} antialiased px-10 py-2 outline-none bg-white hover:text-[#13901F] text-black text-[20px]`}>Get Involved</Link>
        </div>
    </main>
  )
}
 
export default Hero