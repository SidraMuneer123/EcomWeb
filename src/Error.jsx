import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className=" flex flex-col main my-32 items-center justify-center space-y-4">
    <p className='text-7xl font-semibold '>404</p>
    <h1 className='text-xl'>UH HU! You're Lost</h1>
    <p>The Page u are looking for doesnot exist.How you get here is mystery. But U can Click the button  below to go back to home page</p>
    <NavLink to='/'><button className='w-28 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Home</button></NavLink>

    </div>
      
    </div>
  )
}

export default Error
