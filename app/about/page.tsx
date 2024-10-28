import React from 'react'
import Hero from '../components/about/Hero'
import Facts from '../components/about/Facts'
import Mission from '../components/about/Mission'
import Challenges from '../components/about/Challenges'
import Why from '../components/about/Why'
import Team from '../components/about/Team'
import Awards from '../components/about/Awards'
import Testimonial from '../components/Testimonial'

const About = () => {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Facts/>
        <Challenges/>
        <Why/>
        <Team/>
        <Awards/>
        <Testimonial/>
    </div>
  )
}

export default About