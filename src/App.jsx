import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import MyWorks from './components/MyWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div>

      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <MyWorks />
      <Contact />
      <Footer />

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  )
}

export default App
