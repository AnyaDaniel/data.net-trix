'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltRight, BiXCircle } from "react-icons/bi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div>
      <div className='w-full bg-[#13901F] fixed z-50'>
        <div className="flex justify-center items-center text-white py-5">
            <div className="flex justify-between items-center w-[70%]">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <ul className="md:flex font-[700] text-[19px] gap-10 hidden">
                    <Link href={'/'}><li className="hover:text-[#F8C301]">Home</li></Link>
                    <Link href={'/about'}><li className="hover:text-[#F8C301]">About Us</li></Link>
                    <Link href={''}><li className="hover:text-[#F8C301]">Services</li></Link>
                    <Link href={''}><li className="hover:text-[#F8C301]">Contact Us</li></Link>
                </ul>
                <Link href={''} className='hidden md:block'><Image src={'/globe.png'} alt='globe' width={54} height={46}/></Link>
                <BiMenuAltRight className='text-[30px] md:hidden' onClick={handleClick} />
            </div>
        </div>
      </div>
      <div className={isActive ? ' fixed w-full z-50' : 'hidden'}>
            <div className="flex justify-center items-center text-white py-5 bg-[#13901F]">
              <div className="flex justify-between items-center w-[70%]">
                <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={87} height={57}/></Link>
                <BiXCircle className='text-[30px] md:hidden text-right' onClick={handleClick}/>
              </div>
            </div>
            <div className="flex justify-center items-center h-screen ">
              
              <div className="w-[20%] h-full overflow-y-scroll" onClick={handleClick}></div>
              <div className="w-[80%] py-5 px-20 bg-[#13901F] text-white h-full">
                <ul className="text-[30px] text-right pt-10">
                      <Link href={'/'}><li className="hover:text-[#F8C301] py-5">Home</li></Link>
                      <Link href={''}><li className="hover:text-[#F8C301] py-5">About Us</li></Link>
                      <Link href={''}><li className="hover:text-[#F8C301] py-5">Services</li></Link>
                      <Link href={''}><li className="hover:text-[#F8C301] py-5">Contact Us</li></Link>
                  </ul>
                  <Link href={''} className='flex justify-end'><Image src={'/globe.png'} className='mt-20' alt='globe' width={54} height={46}/></Link>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar