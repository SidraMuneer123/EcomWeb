import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [data , setData] = useState(false);
    const toggle = ()=>{
        setData(!data);
        console.log(data)
    }
  return (
   <>
    <div className='bg-slate-50 h-auto flex flex-col py-3 md:flex-row lg:py-1 '>
    <img className='h-12 w-32 ml-5' src="/Images/logo.png" alt="" />
    <div className="absolute right-0 mr-3 mt-4 md:hidden">

    <i onClick={toggle} className={data ? "hidden" : "fa-solid fa-bars fa-2xl "}></i>
    <i onClick={toggle} className={data ? "fa-solid fa-x fa-xl " : "hidden"}></i>
    </div>
    
    <div className={data ? "block" : "hidden md:block"}>
        <ul className=" flex flex-col items-center md:flex-row md:absolute md:right-0 md:space-x-14 md:mr-7">
            <li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>Home</li>
            <li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>About</li>
            <li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>Product</li>
            <li className='my-3 font-medium lg:font-thin  text-xl lg:text-base hover:text-blue-950 hover:font-semibold cursor-pointer hover:underline'>Contact</li>
            <i class="fa-solid fa-cart-shopping fa-xl cursor-pointer"></i>
            <span>10</span>
        </ul>
    </div>
    {/* //<div className={data ? "visible" : "hidden"}> */}

    

    </div>
   </>
  )
}

export default Navbar
