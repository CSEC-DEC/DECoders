import React from 'react'
import Partner from '../assets/partner.png'
import Senay from '../assets/senay.jpg'
import Marquee from "react-fast-marquee";
function Partners() {
    const marquee = {
        width:'100%'
      }
     
    
  return (
    <div id='partners' className='flex justify-around'>
          <div className='my-40'>
        <h1 className='font-mono text-white text-center font-bold text-4xl my-12'>Our Partners</h1>
          <Marquee style={marquee}>
            <div className='flex flex-col justify-center items-center gap-2'>
                <img src={Partner} alt="Partner Logo" style={{ marginRight: '50%' ,width:'300px', height:'300px'}}/>
                <p className='text-white  text-lg' >Defence University</p>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-2'>
                <img src={Senay} alt="Senay Image" style={{ marginLeft: '50%', width:'300px', height:'300px'}} />
                <p className='text-white text-lg' >SenayCreatives</p>

            </div>
        </Marquee>
      </div>
      <style jsx>{`
        @keyframes marquee {
  0% {
    transform: translateX(100%); /* Start off-screen right */
  }
  100% {
    transform: translateX(-100%); /* End off-screen left */
  }
}
      `}</style>
    </div>
    
  )
}

export default Partners