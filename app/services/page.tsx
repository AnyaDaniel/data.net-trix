import React from 'react'
import Hero from '../components/services/Hero'
import ContactLink from '../components/main/ContactLink'
import Services from '../components/services/Services'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className="p-40"></div>
      <ContactLink heading="Don't Think Twice. Let us Protect Your Data."/>
      <Services/>
    </div>
  )
}

export default page