import React from 'react'
import WhyCards from './sub/WhyCards'

const Why = () => {
  return (
    <div className='py-20 px-20'>
        <h1 className="text-[40px] pb-16 pl-10 flex items-end">Why us?</h1>
        <div className="flex justify-center items-start gap-5">
            <WhyCards heading='Proven Expertise' text="Our team of certified cybersecurity professionals has years of experience in delivering data protection services that meet the highest standards in the industry." />
            <WhyCards heading='Regulatory Compliance Leadership' text=' As a licensed DPCO, we offer unmatched expertise in navigating complex regulatory landscapes, ensuring your business is always ahead of compliance requirements.'/>
            <WhyCards heading="Tailored Solutions" text="We understand that every business is unique, so we customize our services, from firewall setup to compliance training, to fit your organization's specific needs."/>
            <WhyCards heading='Comprehensive Service Portfolio' text="From conducting privacy impact assessments (PIA) to delivering SOC centers, we provide end-to-end cybersecurity solutions to protect your business against emerging threats."/>
        </div>
    </div>
  )
}

export default Why