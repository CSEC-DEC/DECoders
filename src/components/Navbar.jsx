import React from 'react';

function Navbar() {
  return (
    <div className='flex text-white backdrop-blur-lg border-b border-gray-200/30 shadow-lg fixed w-full h-[5.5em] justify-around items-center'>
      <div>
        <a href="#"className='text-2xl'>&lt;DECoders/&gt;</a>
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
