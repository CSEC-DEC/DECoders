import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
function Contact() {
  return (
    <div id="contact" className='min-h-screen flex flex-col justify-center items-center text-white p-8'>
      <h2 className='text-4xl font-bold mb-6'>Contact Us</h2>
      <p className='text-lg mb-8'>We'd love to hear from you! Reach out to us through any of the following platforms:</p>
      <div className='flex space-x-8'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <i className="fa fa-facebook-square fa-3x"></i>
          <span className='mt-2'>Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <i className="fa fa-twitter-square fa-3x"></i>
          <span className='mt-2'>Twitter</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <i className="fa fa-instagram fa-3x"></i>
          <span className='mt-2'>Instagram</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <i className="fa fa-linkedin fa-3x"></i>
          <span className='mt-2'>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;