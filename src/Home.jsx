import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';

const Home = () => {
  const data = {
    name : "Thappa Store"
  }
  const img = "./Images/hero.jpg";
  return (
    <>
      <HeroSection myData = {data} src = {img}/>
      <Services />
    </>
  )
}

export default Home
