import React from 'react';
import bg from '../assets/bg-back.webp';

function Home() {
  return (
    <div
      className='bg-slate-950 text-white min-h-screen w-full flex justify-center items-center'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className='flex flex-col text-center p-4'>
        <div className='text-8xl'>&lt;DECoders/&gt;</div>
        <div className='text-xl mt-2'>
          Coders&apos; community based in <br />
          Defence University Engineering College.
        </div>
      </div>
    </div>
  );
}

export default Home;