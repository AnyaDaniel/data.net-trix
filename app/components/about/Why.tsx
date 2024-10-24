import React from 'react'
import WhyCards from './sub/WhyCards'

const Why = () => {
  return (
    <div className='py-20 px-20'>
        <h1 className="text-[40px] pb-16 pl-10 flex items-end">Why us?</h1>
        <div className="flex justify-center items-start gap-5">
            <WhyCards heading='Result-oriented' text="For our company, the only indicator of the project&apos;s success is the achievement of the goals and objectives set by the client. Due to high-quality project management and a team of IT talents, we carry out our work as quickly and efficiently as possible." />
            <WhyCards heading='Flexible' text='Our team already numbers 1800+ highly qualified IT professionals. It allows us to quickly adapt to the needs of our clients. We provide rapid team ramp-up and easily scale it up and down depending on the changing conditions of the project.'/>
            <WhyCards heading="Transparent" text="Our cooperation with clients is always open and honest. We ensure regular communication, an established daily reporting system, and tracking tools according to the client&apos;s preferences. Thus, our clients can control all possible aspects of projects."/>
            <WhyCards heading='Experienced' text="Innowise has established well-managed processes to deliver software development services. They are based on the best examples of IT outsourcing and can be easily aligned to the specifics of customers and their projects."/>
        </div>
    </div>
  )
}

export default Why