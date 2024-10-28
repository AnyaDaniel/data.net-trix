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
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>Multi-National Compliance Gaps</h1>
                <p className="text-[20px] pl-7">We helped a global e-commerce platform bridge compliance gaps between GDPR and local data protection laws, enabling seamless cross-border data operations.</p>
            </div>
            <div className="px-10">
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>Customized Training for Large Enterprises</h1>
                <p className="text-[20px] pl-7">We designed and delivered a custom training program for a multinational corporation, ensuring that over 5,000 employees across multiple regions were fully compliant with GDPR, CCPA, and NDPR regulations.</p>
            </div>
            <div className="">
                <h1 className="text-[30px] pb-3 flex items-center"><span className='text-[#F8C301] text-[16px] pr-3' ><BsCircleFill/></span>End-to-End Compliance Audits</h1>
                <p className="text-[20px] pl-7">We conducted in-depth compliance audits for various sectors, including healthcare and fintech, helping them pass regulatory inspections with zero fines or penalties.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Challenges