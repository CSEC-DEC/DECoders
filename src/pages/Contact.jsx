import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center text-white p-6 sm:p-8 bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Contact Us</h2>
      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center px-4">
        We'd love to hear from you! Reach out to us through any of the following platforms:
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
          <i className="fa fa-facebook-square fa-3x sm:fa-4x"></i>
          <span className="mt-2 sm:mt-3 text-sm sm:text-base">Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
          <i className="fa fa-twitter-square fa-3x sm:fa-4x"></i>
          <span className="mt-2 sm:mt-3 text-sm sm:text-base">Twitter</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
          <i className="fa fa-instagram fa-3x sm:fa-4x"></i>
          <span className="mt-2 sm:mt-3 text-sm sm:text-base">Instagram</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
          <i className="fa fa-linkedin fa-3x sm:fa-4x"></i>
          <span className="mt-2 sm:mt-3 text-sm sm:text-base">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
