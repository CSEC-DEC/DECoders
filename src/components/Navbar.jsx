import React from 'react';

function Navbar() {
  return (
    <div className='flex bg-transparent border-b shadow-xl border-gray-900 text-white h-[5.5em] fixed w-full justify-around items-center'>
      <div>
        <h1 className='text-2xl'>&lt;DECoders/&gt;</h1>
      </div>
      <div>
        <ul className='flex gap-6'>
          <li><a href="#about" className='hover:text-gray-400'>About Us</a></li>
          <li><a href="#" className='hover:text-gray-400'>Join</a></li>
          <li><a href="#" className='hover:text-gray-400'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;