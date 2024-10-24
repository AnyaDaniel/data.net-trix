import React from 'react'
import Hero from '../components/about/Hero'
import Facts from '../components/about/Facts'
import Mission from '../components/about/Mission'
import Challenges from '../components/about/Challenges'
import Why from '../components/about/Why'

const About = () => {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Facts/>
        <Challenges/>
        <Why/>
    </div>
  )
}

export default About