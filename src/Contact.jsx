import React from 'react'

const Contact = () => {
  return (
    <>
    <h2 className='my-7 animate-pulse text-3xl font-semibold text-center font-[Lato] space-x-7'>Contact Us</h2>
    <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13405.078298340126!2d73.59326534126488!3d32.864586251651346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f859b8518dc09%3A0xaea49a3a10a42718!2sSanghoi%2C%20Jhelum%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695022949251!5m2!1sen!2s" width="600" height="450" style={{'border':'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <form action="https://formspree.io/f/xzblvjgw" method='POST' className='flex flex-col text-center justify-center items-center space-y-6 mt-7'>
      <input className='w-80 p-1 rounded-lg border-2 border-gray-300' type="text" placeholder='Enter Your Username' name='username' required autoComplete='off' />
      <input className=' w-80 p-1 rounded-lg border-2 border-gray-300' type="email" name="email" placeholder='Enter Your Email' required autoComplete='off' />
      <textarea className='pl-2 pt-2 rounded-lg border-2 border-gray-300' name="Message" cols="41" rows="7" placeholder='Enter Your Message' autoComplete='off'></textarea>
      <div className=' mb-3 w-28 mt-3 text-center cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded'>

      <input className='bg-red-900' type="submit" value="Send" />
      </div>
    </form>



    </>
  )
}

export default Contact
// {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13405.078298340126!2d73.59326534126488!3d32.864586251651346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f859b8518dc09%3A0xaea49a3a10a42718!2sSanghoi%2C%20Jhelum%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695022949251!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
