import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-[5.5em] flex justify-around items-center text-white backdrop-blur-lg border-b border-gray-200/30 shadow-lg p-4'>
      <div>
        <a href="#" className='text-2xl font-mono'>&lt;DECoders/&gt;</a>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex gap-6'>
          <li><a href="#" className='hover:text-gray-400'>Home</a></li>
          <li><a href="#partners" className='hover:text-gray-400'>Partners</a></li>

          <li><a href="#about" className='hover:text-gray-400'>About Us</a></li>
          <li><a href="#join" className='hover:text-gray-400'>Join</a></li>
          <li><a href="#contact" className='hover:text-gray-400'>Contact</a></li>
        </ul>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-slate-900 shadow-lg md:hidden'>
          <ul className='flex flex-col items-center'>
            <li><a href="#" className='block px-4 py-2 hover:text-gray-400'>Home</a></li>
            <li><a href="#about" className='block px-4 py-2 hover:text-gray-400'>About Us</a></li>
            <li><a href="#join" className='block px-4 py-2 hover:text-gray-400'>Join</a></li>
            <li><a href="#contact" className='block px-4 py-2 hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;