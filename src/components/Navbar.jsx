import React from 'react';

function Navbar() {
  return (
    <div className='fixed top-0 left-0 z-50 w-full h-[5.5em] flex justify-around items-center text-white backdrop-blur-lg border-b border-gray-200/30 shadow-lg'>
      <div>
        <a href="#" className='text-2xl'>&lt;DECoders/&gt;</a>
      </div>
      <div>
        <ul className='flex gap-6'>
          <li><a href="#" className='hover:text-gray-400'>Home</a></li>
          <li><a href="#about" className='hover:text-gray-400'>About Us</a></li>
          <li><a href="#join" className='hover:text-gray-400'>Join</a></li>
          <li><a href="#contact" className='hover:text-gray-400'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;