import React from 'react'
import { BsCircleFill } from 'react-icons/bs'

const Challenges = () => {
  return (
    <div className='bg-[#f8f8f9] pt-40 px-20'>
       
        <div className=" border-b-2 border-[#02010180] pb-20 px-20">
        <div className="pb-20">
            <h1 className="text-[40px] pb-2 flex items-end">Challenges we help solve</h1>
            <div className="line"></div>
        </div>
        <div className="flex justify-center items-start">
            <div className="">
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>IT expertise gap</h1>
                <p className="text-[20px]">We help our customers get rid of expertise and technological gaps, offering the experienced teams of IT professionals to complete software development projects of any complexity.</p>
            </div>
            <div className="px-10">
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>Cost reduction</h1>
                <p className="text-[20px]">Innowise provides IT outsourcing services and helps clients around the world to optimize software development costs. Our team has all the needed expertise to carry out turnkey projects, quickly complete tasks and bring all the benefits of outsourcing.</p>
            </div>
            <div className="">
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>Digital transformation</h1>
                <p className="text-[20px]">Our team can help you plan and implement digital transformation initiatives, covering all possible stages. Innowise is a reliable partner on the path to digital success and business optimization.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Challenges