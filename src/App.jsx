import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Pet from './components/Pet.jsx'
import Donation from './components/Donation.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Pet />
      <Donation />
      <Footer />
    </div>
  )
}

export default App