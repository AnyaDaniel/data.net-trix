import React from 'react'
import { Koulen } from 'next/font/google'
import Link from 'next/link'
import { Inria_Sans } from 'next/font/google'
import Image from 'next/image'

const inria_sans = Inria_Sans({
   weight: ['300', '400', '700'],
   subsets: ['latin'],
   style: ['normal', 'italic']
  })


const koulen = Koulen({
   weight: '400',
   subsets: ['latin'] 
  })

const Hero = () => {
  return (
    <main className={koulen.className}>
        <div className='bg-[#13901F] md:pl-20 md:flex items-center md:h-screen w-screen '>
            <div className="md:w-[60%] px-4 md:px-0 h-fit text-white">
                <h1 className="font-[300] text-[20px] md:text-[40px] pt-20">Safeguarding Your Data, Ensuring Compliance</h1>
                <p className="font-[100] text-[18px] mb-20 pt-1 uppercase">In today’s digital age, protecting data is essential for safeguarding your company’s reputation and ensuring operational continuity. At Net-Trix Solutions, we lead the way in data protection and compliance as a licensed Data Protection Compliance Organization with the Nigerian Data Protection Bureau.</p>
                <Link href='' className={`${inria_sans.className} antialiased px-10 py-2 outline-none bg-white rounded-[50px] hover:text-[#13901F] text-black text-[36px]`}>Get Involved</Link>
            </div>
            <Image src={'/hero.png'} alt='hero' className='right-0 top-16 md:absolute' width={600} height={800} />
        </div>
    </main>
  )
}

export default Hero