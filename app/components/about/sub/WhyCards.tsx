import React from 'react'

export interface WhyCards {
    heading: string, text: string;
  }

const WhyCards = ({heading, text}:WhyCards) => {
  return (
    <div className='p-10 border-2 border-[#F8C301] rounded-xl h-[450px]'>
        <div className="">
            <h1 className="text-[30px] pb-2 flex items-end">{heading}</h1>
            <div className="line"></div>
            <p className="text-[18px] pt-5">{text}</p>
        </div>

    </div>
  )
}

export default WhyCards