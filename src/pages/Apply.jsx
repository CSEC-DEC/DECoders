import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    alert('Your application has been submitted!');
  };

  return (
    <>
     <div className='fixed top-0 left-0 z-50 w-full h-[5.5em] flex justify-around items-center text-white backdrop-blur-lg border-b border-gray-200/30 shadow-lg p-4'>
      <div>
      <Link to='/'><a href="#" className='text-2xl font-mono'>&lt;DECoders/&gt;</a></Link>  
      </div>
      </div>
    <div className='min-h-screen flex flex-col pt-[8em] justify-center items-center bg-slate-950 text-white p-8'>
      <h2 className='text-4xl font-bold mb-4'>Apply to Join</h2>
      <form onSubmit={handleSubmit} className='bg-gray-800  p-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='mb-4'>
          <label className='block text-lg mb-2' htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full text-black p-2 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-lg mb-2' htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full text-black  p-2 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-lg mb-2' htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full text-black p-2 rounded'
            required
          />
        </div>
        <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
          Submit
        </button>
      </form>
    </div></>
  );
}

export default Apply;