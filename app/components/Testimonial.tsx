'use client'

import React, { CSSProperties } from 'react'
import { FaCaretDown, FaCaretUp, FaQuoteLeft } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const Testimonial = () => {
    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        right: 15,
        fontSize: '30px',
        cursor: 'pointer',
        background: 'transparent',
        color: '#F8C301',
        
    };

    const indicatorStyles: CSSProperties = {
        background: '#F8C301',
        width: 20,
        height: 4,
        display: 'inline-block',
        margin: '0 4px',
        cursor: 'pointer',
    };

  return (
    <div className='py-10 px-4 md:px-20'>
        <div className="pb-20">
            <h1 className="text-[40px] pb-2 flex items-end">Testimonials <span className="text-[#F8C301] text-[40px] font-[700]">.</span></h1>
            <div className="line"></div>
        </div>
        <Carousel axis='vertical' className='md:px-40' autoPlay={true} autoFocus={true} showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} showStatus={false} useKeyboardArrows={true} stopOnHover={true} swipeable={true} interval={5000} transitionTime={1000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} 
                onMouseOver={(e) => e.currentTarget.style.color = '#13901F'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#f8c301'} 
                title={label} style={{ ...arrowStyles, top: 'calc(50% - 40px)' }}>
                    <FaCaretUp />
                </button>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} 
                onMouseOver={(e) => e.currentTarget.style.color = '#13901F'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#f8c301'} 
                title={label} style={{ ...arrowStyles, top: 'calc(50% + 25px)' }}>
                    <FaCaretDown />
                </button>
            )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
                return (
                    <li
                        style={{ ...indicatorStyles, background: '#13901F' }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                    />
                );
            }return (
                <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                />
            );
        }}>
            <div className="border-2 border-[#F8C301] rounded-xl py-10 px-4 md:px-20 flex justify-start items-start">
                <div className=""><FaQuoteLeft className='text-[#13901F] text-[30px]' /></div>
                <div className="px-4 md:px-10 pt-5">
                    <p className="md:text-[20px] pb-10 text-left">Innowise was selected due to its extensive experience of developing complex medical solutions. They managed to quickly and effectively put together a team of IT-specialists. Innowise is characterized by efficient and professional organization of its operation practices.</p>
                    <p className="font-[700] md:text-[20px] text-right pr-5">Dr. Udo Richter</p>
                    <p className="md:text-[20px] text-right py-1 pr-5">Director</p>
                    <p className="md:text-[20px] text-right pr-5">Naip</p>
                </div>
            </div>
            <div className="border-2 border-[#F8C301] rounded-xl py-10 px-4 md:px-20 flex justify-start items-start">
                <div className=""><FaQuoteLeft className='text-[#13901F] text-[30px]' /></div>
                <div className="px-4 md:px-10 pt-5">
                    <p className="md:text-[20px] pb-10 text-left">Innowise was selected due to its extensive experience of developing complex medical solutions. They managed to quickly and effectively put together a team of IT-specialists. Innowise is characterized by efficient and professional organization of its operation practices.</p>
                    <p className="font-[700] md:text-[20px] text-right pr-5">Dr. Udo Richter</p>
                    <p className="md:text-[20px] text-right py-1 pr-5">Director</p>
                    <p className="md:text-[20px] text-right pr-5">Naip</p>
                </div>
            </div>
            <div className="border-2 border-[#F8C301] rounded-xl py-10 px-4 md:px-20 flex justify-start items-start">
                <div className=""><FaQuoteLeft className='text-[#13901F] text-[30px]' /></div>
                <div className="px-4 md:px-10 pt-5">
                    <p className="md:text-[20px] pb-10 text-left">Innowise was selected due to its extensive experience of developing complex medical solutions. They managed to quickly and effectively put together a team of IT-specialists. Innowise is characterized by efficient and professional organization of its operation practices.</p>
                    <p className="font-[700] md:text-[20px] text-right pr-5">Dr. Udo Richter</p>
                    <p className="md:text-[20px] text-right py-1 pr-5">Director</p>
                    <p className="md:text-[20px] text-right pr-5">Naip</p>
                </div>
            </div>
            <div className="border-2 border-[#F8C301] rounded-xl py-10 px-4 md:px-20 flex justify-start items-start">
                <div className=""><FaQuoteLeft className='text-[#13901F] text-[30px]' /></div>
                <div className="px-4 md:px-10 pt-5">
                    <p className="md:text-[20px] pb-10 text-left">Innowise was selected due to its extensive experience of developing complex medical solutions. They managed to quickly and effectively put together a team of IT-specialists. Innowise is characterized by efficient and professional organization of its operation practices.</p>
                    <p className="font-[700] md:text-[20px] text-right pr-5">Dr. Udo Richter</p>
                    <p className="md:text-[20px] text-right py-1 pr-5">Director</p>
                    <p className="md:text-[20px] text-right pr-5">Naip</p>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Testimonial