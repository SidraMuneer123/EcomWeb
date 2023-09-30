import React from 'react';
import { NavLink } from 'react-router-dom';
// Stated at 2:30

const Footer = () => {
  return (
    <>
    <div className=' relative top-10 mt-7  w-full h-auto justify-center '>

        <div  className=' relative text-xs  py-3 lg:p-6 mx-auto bg-gray-200 rounded-lg flex w-[50%] items-center'>
        <div className='pl-4'>
        <h1>Ready to Get Started?</h1>
        <h1>Talk to Us Today</h1>

        </div>
        <NavLink to="/contact"><button className=' bottom-5 mr-4 text-xs  absolute right-0 md:w-28 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 border border-blue-700 rounded'>GET STARTED</button></NavLink>

        </div>
    </div>
    <div className='2nd text-xs sm:text-sm  bg-blue-950 h-64 mb-12 flex text-white justify-center items-center space-x-5'>
    <div className='w-60 flex flex-col space-y-3'>
    <h1>Thappa Technical</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

    </div>
    <div className='w-60 text-center items-center flex flex-col space-y-3'>
    <h1>Subscribe to Get Important Update</h1>
    <input className='h-10 sm:w-36 w-28 rounded-xl text-black px-2' type="text" />
    <button className='px-3 sm:w-24 w-20  bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 border border-blue-700 rounded-xl'>Subscribe</button>

    </div>
    
    <div className='w-60 text-center space-y-3'>
    <h1>Follow us</h1>
    <div className="icons sm:space-x-5 space-x-1">
    <a href='https://www.instagram.com/sidra2503/'><i class=" cursor-pointer fa-brands fa-instagram fa-lg text-white"></i></a>
    <a href='https://www.youtube.com/channel/UCTHfXBDuUxhuSIHYjTTDcFA'><i class="fa-brands fa-youtube fa-lg text-white"></i></a>
    <a href='https://www.facebook.com/profile.php?id=100022017669094'><i class="fa-brands fa-facebook fa-lg text-white"></i></a>
    </div>

    </div>
    <div className='flex flex-col w-60 text-center'>
    <h1>Call Us</h1>
    <br />
    <p>+92 3441240974</p>
    </div>
    
    
    


    </div>
    </>
  )
}

export default Footer
