import React from 'react';
import logo from '../assets/logo.jpg'; 
import bab from '../assets/Me.jpg'

function Join() {
  const members = [
    { name: "Eureka T.", role: "Backend Developer | Cyber enthusiast", image: logo },
    { name: "Asher Samuel", role: "Backend Developer | Go goat!", image: logo },
    { name: "Eyuel Kebede", role: "Graphics Designer | Project Manager | All in One!", image: logo },
    { name: "Anduti Gech", role: "Fullstack Developer", image: logo },
    { name: "Mikee Sword", role: "Frontend Developer", image: logo },
    { name: "Dagim", role: "Fullstack Developer | Django master!", image: logo },
    { name: "Kidus Mekonnen", role: "UI/UX Designer", image: logo },
    { name: "Haileamlak D.", role: "Fullstack Dev", image: bab },
  ];

  return (
    <div id="join" className='min-h-screen pt-[6em] flex flex-col justify-center items-center text-white text-2xl p-8'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>Join Our Community!</h2>
        <p className='text-lg mt-2'>Become part of a vibrant network of coders and tech enthusiasts.</p>
        <p className='text-lg mt-4'>Current Members - <span className='font-semibold'>{members.length}</span></p>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        {members.map((member, index) => (
          <div key={index} className='flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-lg w-60'>
            <img src={member.image} alt={member.name} className='h-32 rounded-full border-4 border-blue-600 mb-4' />
            <p className='text-md font-semibold'>{member.name}</p>
            <p className='text-sm text-center'>{member.role}</p>
          </div>
        ))}
      </div>
      <a 
        href="#join" 
        className='mt-8 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Join Us
      </a>
    </div>
  );
}

export default Join;