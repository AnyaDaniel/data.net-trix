// import Image from 'next/image'
import React from 'react'

export interface SingleProps {
    heading: string, listone: string, listtwo: string, listthree: string, listfour: string, pic: string
  }

const Single = ({heading, listone, listtwo, listthree, listfour}: SingleProps) => {
  return (
    <div className=''>
        <div className="border-2 border-[#ffd700] hover:bg-[#2e2e2e] hover:text-[#fbfbfd]">
          {/* <Image src={pic} alt='single' width={381} height={456} className='cardimg'/> */}
          <div className="p-10 h-[410px]">
            <h1 className="font-[300] text-[25px] pb-5 uppercase">{heading}</h1>
            <ul className="font-[100] text-[16px] list-disc pl-4">
                <li>{listone}</li>
                <li>{listtwo}</li>
                <li>{listthree}</li>
                <li className={listfour === '' ? 'opacity-0' : 'opacity-100' }>{listfour}</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Single