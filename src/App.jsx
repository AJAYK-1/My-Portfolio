import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import MyWorks from './components/MyWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div>

      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills/>
      <MyWorks/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
