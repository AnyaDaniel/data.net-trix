'use client'

import Link from 'next/link'
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineCodepen } from 'react-icons/ai';
import { FaCircleArrowLeft, FaCircleChevronRight } from 'react-icons/fa6';


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}

      ><FaCircleArrowLeft className="text-green-500 " /></div>
    );
  }

const Offer = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <div className='flex items-center'>
        <div className="w-[35%] pl-40 pr-10 ">
            <p className="text-[20px] text-black">SERVICES</p>
            <div className="pb-10 pt-2">
                <h1 className="text-[40px] pb-2 flex items-end leading-none text-[#27592D]">Services We Render</h1>
                <div className="line my-5"></div>
                <p className="text-[20px] text-gray-700">Are you one of the thousands of iphone users who have no idea.</p>
            </div>
            
            <Link href={'/services'} className='text-[#27592D] hover:text-[#13901F] text-[25px]'>See full details</Link>
        </div>
        <div className="w-[65%] pl-20 pt-32  h-screen">
            <div className="w-[100%] h-[30vh] rounded-lg mr-40 bg-[#1390205e]">
                <div className="slider-container pt-10">
                    <Slider {...settings}>
                        <div className="px-5  ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Collection and Consent</h1>
                                        <Link href={''} className='mb-0 mt-auto' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Minimization</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Security</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Transparency and Accountability</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Sharing and Third-Party Partnership</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Breach Response and Notification</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Data Subject Right</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Privacy by Design and Default</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center ">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Training and Awareness</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 ">
                            <div className="bg-[#f8f8f9] h-[470px] rounded-lg pt-10 px-10 pb-5  ">
                                <div className="flex flex-col items-center justify-center text-center">
                                        <div className="rounded-[50%] bg-[#2e2e2e0e]  flex justify-center w-[150px] h-[150px] items-center "><AiOutlineCodepen className='text-[100px] text-[#13901F]' /></div>
                                        <h1 className="text-[30px] leading-tight py-10 ">Compliance and Governance</h1>
                                        <Link href={''} className='  ' ><FaCircleChevronRight className='text-[30px] text-[#13901F] hover:text-[#27592D]' /></Link>
                                </div>
                            </div>
                        </div>

                        {/* second to last and last carousel */}
                        {/* should never be replaced */}
                        {/* <div className=""></div> */}


                        
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer