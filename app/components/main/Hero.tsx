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
                <h1 className="font-[400] text-[60px] md:text-[100px] pt-20">DATA PROTECTION</h1>
                <p className="font-[400] text-[30px] mb-20 pt-1 uppercase">Lorem ipsum dolor sit ame consectetur.orem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit ame consectetur.orem ipsum dolor sit amet consectetur.</p>
                <Link href='' className={`${inria_sans.className} antialiased px-10 py-2 outline-none bg-white rounded-[50px] hover:text-[#13901F] text-black text-[36px]`}>Quiet Hire</Link>
            </div>
            <Image src={'/hero.png'} alt='hero' className='right-0 top-16 md:absolute' width={600} height={800} />
        </div>
    </main>
  )
}

export default Hero