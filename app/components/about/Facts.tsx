import React from 'react'

const Facts = () => {
  return (
    <div className="bg-[url('/double9.jpg')] facts bg-cover bg-fixed">
        <div className="px-40 py-20 text-white bg-[#00000090]">
            <div className="">
                <h1 className="text-[60px] pb-2 flex items-end">Brief Facts <span className="text-[#F8C301] text-[60px] font-[700]">.</span></h1>
                <div className="line"></div>
            </div>
            <div className="grid grid-cols-3 gap-10 px-10 py-20">
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">17 <span className="text-[#F8C301] text-[40px] font-[700]"> +</span></h1>
                    <p className="text-[20px] pb-5">years of experience</p>
                    <div className="line"></div>
                </div>
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">1800 <span className="text-[#F8C301] text-[40px] font-[700]"> +</span></h1>
                    <p className="text-[20px] pb-5">IT professionals</p>
                    <div className="line"></div>
                </div>
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">40 <span className="text-[#F8C301] text-[40px] font-[700]"> +</span></h1>
                    <p className="text-[20px] pb-5">domains</p>
                    <div className="line"></div>
                </div>
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">93 <span className="text-[#F8C301] text-[40px] font-[700]"> %</span></h1>
                    <p className="text-[20px] pb-5">recurring customers</p>
                    <div className="line"></div>
                </div>
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">1100 <span className="text-[#F8C301] text-[40px] font-[700]"> +</span></h1>
                    <p className="text-[20px] pb-5">delivered projects</p>
                    <div className="line"></div>
                </div>
                <div className="">
                    <h1 className="text-[40px] flex items-end leading-none">300 <span className="text-[#F8C301] text-[40px] font-[700]"> +</span></h1>
                    <p className="text-[20px] pb-5">customers from 60+ countries</p>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts