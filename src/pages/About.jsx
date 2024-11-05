import React, { useEffect, useState } from 'react';

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id='about' className='min-h-screen pt-[7em] flex flex-col justify-center items-center bg-slate-950 text-white p-8'>
      <h2 className='text-4xl mb-8 text-center font-bold'>About Us</h2>
    
      <div className='flex flex-wrap justify-center w-full max-w-6xl'>
        <div className={`bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3 transition-transform duration-300 ease-in-out ${animate ? 'pop-in' : ''}`}>
          <h3 className='text-2xl font-semibold mb-4'>Welcome</h3>
          <p className='text-lg leading-relaxed'>
            Welcome to the Coders Community Club at Defence University Engineering College (DEC)! We are a vibrant community of passionate coders and tech enthusiasts dedicated to fostering collaboration, innovation, and skill development among students.
          </p>
        </div>
        
        <div className={`bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3 transition-transform duration-300 ease-in-out ${animate ? 'pop-in' : ''}`}>
          <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
          <p className='text-lg leading-relaxed'>
            Our mission is to create an inclusive environment where students can learn from each other, work on exciting projects, and enhance their coding skills. Whether you are a seasoned developer or just starting, there's a place for you in our community!
          </p>
        </div>
        
        <div className={`bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3 transition-transform duration-300 ease-in-out ${animate ? 'pop-in' : ''}`}>
          <h3 className='text-2xl font-semibold mb-4'>Join Us</h3>
          <p className='text-lg leading-relaxed'>
            Join us for workshops, hackathons, and networking events that will empower you to grow as a coder and connect with like-minded individuals. Together, let's explore the world of technology and coding!
          </p>
          
        </div>

        
      </div>


    
      <style jsx>{`
        @keyframes pop-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .pop-in {
          animation: pop-in 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default About;