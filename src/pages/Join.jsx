import React from 'react'
import logo from '../assets/logo.jpg'

function Join() {
  return (
    <div id="join" className='min-h-screen pt-[6em] gap-4 flex flex-col justify-center items-center text-white text-2xl '>
       <div> Join our community!</div>
       <div className='flex gap-12'>
            <img src={logo} alt="" className='h-32 rounded-full'/>
            <img src={logo} alt="" className='h-32 rounded-full'/>
            <img src={logo} alt="" className='h-32 rounded-full'/>

       </div>
    </div>
  )
}

export default Join