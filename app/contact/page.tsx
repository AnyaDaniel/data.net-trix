import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Form from '../components/contact/Form'

const page = () => {
  return (
    <div className='pt-40 px-40 pb-20 bg-[#f8f8f9] flex justify-center items-end'>
        <div className="w-2/3 pr-20">
            <h1 className="text-[60px] pb-2 flex items-end">Contact Us <span className="text-[#F8C301] text-[60px] font-[700]">.</span></h1>
            <div className="line"></div>
            <p className="text-[20px] pt-5 pb-10">Fill out the form below and we&apos;ll get back to you once we&apos;ve processed your request.</p>
            <Form/>
            <div className="flex justify-start items-center gap-5 pt-20">
                <Link href={''}><Image src={'/facebook.png'} alt='facebook' width={45.36} height={46.97}/></Link>
                <Link href={''}><Image src={'/twitter.png'} alt='twitter' width={45.36} height={46.97}/></Link>
                <Link href={''}><Image src={'/instagram.png'} alt='instagram' width={45.36} height={46.97}/></Link>

            </div>
        </div>
        <div className="w-1/3">
            <div className="relative mb-10">
                <Image src={'/contactimg.jpg'} alt='contactimg' className='contactimg' width={100} height={500}/>
                <div className="contact-triangle absolute -right-5 -bottom-5"></div>
            </div>
            <p className="text-[20px]">You can also send us your request to <Link href={'mailto:info@net-trixsolutions.com'} className='text-[#13901F] hover:text-[#F8C301]'>info@net-trixsolutions.com</Link> or call: <br />+234 906 000 0456</p>
        </div>

    </div>
  )
}

export default page