import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import About from './About'

function LandingPage() {
  return (
    <div className='bg-slate-950'>
        <Navbar />
        <Home />
        <About />
    </div>
  )
}

export default LandingPage