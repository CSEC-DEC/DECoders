import React from 'react';
import bg from '../assets/bg-back.webp';
import Partner from '../assets/partner.png'
import Senay from '../assets/senay.jpg'
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";


function Home() {
  const decode =[ '<DECoders/>']
  const marquee = {
    width:'100%'
  }
 

  return (
    <div
      className='bg-slate-950 text-white min-h-screen w-full flex justify-center items-center'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex flex-col text-center p-4'>
        <div className='text-4xl md:text-6xl lg:text-8xl font-mono'>
          <Typewriter 
          words = {decode}
          loop= {5}
          cursor
          cursorStyle='|'
          cursorColor='tomato'
          typeSpeed={100}
          deleteSpeed={90}
          delaySpeed={1000}
          
          />
        </div>
        <div className='text-base md:text-lg lg:text-xl mt-2'>
          Coders&apos; community based in <br />
          Defence University Engineering College.
        </div>

              {/* marquee section of our partners */}
      <div className='my-40'>
        <h1 className='font-mono font-bold text-4xl my-12'>Our Partners</h1>
          <Marquee style={marquee}>
            <img src={Partner} alt="Partner Logo" style={{ marginRight: '50%' ,width:'300px', height:'300px'}}/>
            <img src={Senay} alt="Senay Image" style={{ marginLeft: '50%', width:'300px', height:'300px'}} />
        </Marquee>
      </div>

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
  );
}

export default Home;