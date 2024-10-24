import Image from 'next/image'
import React from 'react'

export interface DoubleProps {
    heading: string, listone: string, listtwo: string, listthree: string, listfour: string, picone: string, pictwo: string
  }

const Double = ({heading, listone, listtwo, listthree, listfour, picone, pictwo}: DoubleProps) => {
  return (
    <div className='py-16'>
        
            <div className="pb-5">
                <h1 className="font-[700] text-[48px] pb-5 uppercase">{heading}</h1>
                <ul className="font-[400] text-[20px] md:text-[25px] list-disc pl-4">
                    <li>{listone}</li>
                    <li>{listtwo}</li>
                    <li>{listthree}</li>
                    <li className={listfour === '' ? 'hidden' : 'block'}>{listfour}</li>
                </ul>
            </div>
        <div className="flex justify-between items-center">  
            <Image src={picone} alt='double' width={556} height={312}/>
            <Image src={pictwo} alt='double' width={pictwo==='double6'? 556 : 607} height={312}/>
        </div>
    </div>
  )
}

export default Double