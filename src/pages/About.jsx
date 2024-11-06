import React, { useEffect, useState } from 'react';

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id="about" className="min-h-screen pt-[7em] flex flex-col items-center  bg-slate-950 text-white px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-12 text-center font-bold">
        About Us
      </h2>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-6">
        {['Welcome', 'Our Mission', 'Join Us'].map((title, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-2xl p-6 w-full sm:w-5/12 lg:w-1/3 transition-transform duration-500 ease-out ${animate ? 'pop-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">{title}</h3>
            <p className="text-base sm:text-lg leading-relaxed text-center">
              {title === 'Welcome' && "Welcome to the Coders Community Club at Defence University Engineering College (DEC)! We are a vibrant community of passionate coders and tech enthusiasts dedicated to fostering collaboration, innovation, and skill development among students."}
              {title === 'Our Mission' && "Our mission is to create an inclusive environment where students can learn from each other, work on exciting projects, and enhance their coding skills. Whether you are a seasoned developer or just starting, there's a place for you in our community!"}
              {title === 'Join Us' && "Join us for workshops, hackathons, and networking events that will empower you to grow as a coder and connect with like-minded individuals. Together, let's explore the world of technology and coding!"}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pop-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .pop-in {
          animation: pop-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default About;
