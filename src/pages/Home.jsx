import React from 'react';
import bg from '../assets/bg-back.webp';

import { Typewriter } from 'react-simple-typewriter'



function Home() {
  const decode =[ '<DECoders/>']
  
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
      </div>
     
    </div>
  );
}

export default Home;