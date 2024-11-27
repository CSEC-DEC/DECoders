import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg'; 
import bab from '../assets/Me.jpg';
import {FaArrowDown,FaArrowUp} from 'react-icons/fa'

function Join() {
  const members = [
    { name: "Haileamlak D.", role: "Fullstack Dev", image: bab },
    { name: "Eyuel Kebede", role: "Graphics Designer | Project Manager | All in One!", image: logo },
    { name: "Anduti Gech", role: "Fullstack Developer", image: logo },
    { name: "Asher Samuel", role: "Backend Developer | Go goat!", image: logo },
    { name: "Dagim", role: "Fullstack Developer | Django master!", image: logo },
    { name: "Yohanes W.", role: "Python Developer", image: logo },
    { name: "Mikias Seife", role: "Frontend Developer", image: logo },
    
    { name: "Kidus Mekonnen", role: "UI/UX Designer", image: logo },
    { name: "Eureka T.", role: "Developer | Haxor", image: logo },
  ];

  const totalMembers = members.length;

  

  const [count, setCount] = useState(0);
  const [show,setShow] = useState(false);


  function toggleButton(){
    setShow(prevstate => !prevstate)
  }


  useEffect(() => {
    let interval = null;
    if (count < totalMembers) {
      interval = setInterval(() => {
        setCount(prevCount => Math.min(prevCount + 1, totalMembers));
      }, 100);
    } else if (count === totalMembers) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, totalMembers]);

  const handleJoinClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfMaUvIb2bOPDxB-ee7MZjceznYyOnaHha_4A_kkDwbKMXVvA/viewform', '_blank');
  };

  const visibleMembers = show ? members : members.slice(0,5)

  return (
    <div id="join" className='min-h-screen pt-[6em] flex flex-col justify-center items-center text-white text-2xl p-8'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>Join Our Community!</h2>
        <p className='text-lg mt-2'>Become part of a vibrant network of coders and tech enthusiasts.</p>
        <p className='text-lg mt-4'>
          Current Members - 
          <span className='font-semibold text-blue-400 animate-pulse mx-1'>{count}</span>
          /{totalMembers}
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        {visibleMembers.map((member, index) => (
          <div key={index} className='flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-lg w-60'>
            <img src={member.image} alt={member.name} className='h-32 rounded-full border-4 border-blue-600 mb-4' />
            <p className='text-md font-semibold'>{member.name}</p>
            <p className='text-sm text-center'>{member.role}</p>
          </div>
        ))}
      </div>

      <button onClick={toggleButton} className='my-6 font-mono hover:text-slate-300 active:text-slate-400'>
          {show ? <FaArrowUp />:<FaArrowDown />}
      </button>



      <button 
        onClick={handleJoinClick} 
        className='mt-8 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Join Us
      </button>
    </div>
  );
}

export default Join;
