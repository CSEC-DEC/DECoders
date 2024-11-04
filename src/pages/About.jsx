import React from 'react';

function About() {
  return (
    <div id='about' className='min-h-screen pt-[7em] flex flex-col justify-center items-center bg-slate-950 text-white p-8'>
      <h2 className='text-4xl mb-6 text-center'>About Us</h2>
    
      <div className='flex flex-wrap justify-center w-full max-w-6xl'>
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3'>
          <p className='text-lg leading-relaxed'>
            Welcome to the Coders Community Club at Defence University Engineering College (DEC)! We are a vibrant community of passionate coders and tech enthusiasts dedicated to fostering collaboration, innovation, and skill development among students.
          </p>
        </div>
        
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3'>
          <p className='text-lg leading-relaxed'>
            Our mission is to create an inclusive environment where students can learn from each other, work on exciting projects, and enhance their coding skills. Whether you are a seasoned developer or just starting, there's a place for you in our community!
          </p>
        </div>
        
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3'>
          <p className='text-lg leading-relaxed'>
            Join us for workshops, hackathons, and networking events that will empower you to grow as a coder and connect with like-minded individuals. Together, let's explore the world of technology and coding!
          </p>
        </div>
      </div>

      <a 
        href="#join" 
        className='mt-4 px-6 py-3 bg-blue-600  text-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105'
      >
        Join Us
      </a>
    </div>
  );
}

export default About;