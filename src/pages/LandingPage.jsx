import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import About from './About'
import Join from './Join'
import Contact from './Contact'
import Partners from './Partners'

function LandingPage() {
  return (
    <div className='bg-slate-950'>
        <Navbar />
        <Home />
        <Partners />
        <About />
        <Join />
        <Contact />
    </div>
  )
}

export default LandingPage