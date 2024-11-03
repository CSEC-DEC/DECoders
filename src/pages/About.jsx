import React from 'react';

function About() {
  return (
    <div id='about' className='min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white p-8'>
      <h2 className='text-4xl mb-6 text-center'>About Us</h2>
    
     <div className='flex flex-start w-[99%]'>
      <p className='text-lg mb-4 leading-relaxed max-w-2xl text-center'>
        Welcome to the Coders Community Club at Defence University Engineering College (DEC)! We are a vibrant community of passionate coders and tech enthusiasts dedicated to fostering collaboration, innovation, and skill development among students.
      </p>
      <p className='text-lg mb-4 leading-relaxed max-w-2xl text-center'>
        Our mission is to create an inclusive environment where students can learn from each other, work on exciting projects, and enhance their coding skills. Whether you are a seasoned developer or just starting, there's a place for you in our community!
      </p>
      <p className='text-lg mb-6 leading-relaxed max-w-2xl text-center'>
        Join us for workshops, hackathons, and networking events that will empower you to grow as a coder and connect with like-minded individuals. Together, let's explore the world of technology and coding!
      </p></div>
      <a 
        href="#join" 
        className='mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105'
      >
        Join Us
      </a>
    </div>
  );
}

export default About;