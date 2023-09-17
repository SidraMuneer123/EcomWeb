import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
  const data = {
    name: "Thappa Ecommerce"
  }
  const img = "./Images/hero2.jpg";
  return (
    <>
      <HeroSection myData  = {data} src = {img} />
    </>
  )
}

export default About
