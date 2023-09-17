import React from 'react'

const HeroSection = ({myData , src}) => {
    const {name} = myData;
    const source = src;
  return (
    <>
        <div className="whole flex sm:flex-row h-auto py-16 px-12 sm:items-center justify-between space-y-5 space-x-6 flex-col">
        <div className="text-sm lg:pl-52 md:pl-20 sm:pl-8 sm:w-[50%] w-full h-full sm:justify-center  flex flex-col">
          <p className='text-gray-500'>Welcome to</p>
          <h1 className='text-4xl font-semibold'>{name}</h1>
          <br />
          <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ab ullam eos fugit officiis numquam adipisci libero maxime beatae repellat?</p>
          <button className=' mt-5 w-28 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Shop Now</button>


        </div>
        <div className="img h-full sm:w-[50%] w-[100%]  flex items-center">
          <img className=' sm:ml-4 h-56 sm:w-80 w-[100%] shadow-lg shadow-gray-500 ' src={source} alt="Img" />

        </div>
      </div>
    </>
  )
}

export default HeroSection
