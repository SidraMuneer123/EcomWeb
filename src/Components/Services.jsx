import React from 'react'

const Services = () => {
  return (
   <>
    <div className='pb-8 text-sm flex-col flex h-auto items-center justify-center space-x-10 space-y-8 py-2 sm:flex-row'>
    <div className='h-52  w-[80%] sm:w-56 bg-gray-100 shadow-lg shadow-gray-400 rounded-3xl flex flex-col items-center justify-center '>
    <i className=" mb-5 fa-solid fa-truck fa-xl"></i>
    <h1>Super Fast and Free Deleivery</h1>

    </div>
    <div className='h-52 w-[80%] sm:w-56 flex flex-col items-center justify-center space-y-9  '>
    <div className='  bg-gray-100 shadow-lg shadow-gray-400 sm:p-5 w-full h-24 text-center items-center justify-center flex sm:w-56 rounded-3xl'>
    <i class="fa-solid fa-shield-halved fa-xl mr-2"></i>
    Non Contact Shipping 
    </div>
    <div className='  bg-gray-100 shadow-lg shadow-gray-400 sm:p-5 w-full h-24 text-center items-center justify-center flex rounded-3xl'>
    <i class="fa-solid fa-money-check-dollar fa-lg mr-2"></i>
        Money Back Gurantee
    </div>

    </div>
    <div className='h-52 w-[80%] sm:w-56  bg-gray-100 shadow-lg shadow-gray-400 rounded-3xl  flex flex-col items-center justify-center  '>
    <i class="fa-brands fa-paypal fa-xl mb-5"></i>
    <h1>Super Secure Payment System</h1>

    </div>

    </div>
   </>
  )
}

export default Services
