import React from 'react';
import bg from '../assets/bg-back.webp';

function Home() {
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
        <div className='text-4xl md:text-6xl lg:text-8xl font-mono'>&lt;DECoders/&gt;</div>
        <div className='text-base md:text-lg lg:text-xl mt-2'>
          Coders&apos; community based in <br />
          Defence University Engineering College.
        </div>
      </div>
    </div>
  );
}

export default Home;