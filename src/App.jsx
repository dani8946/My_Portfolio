import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import PortfolioChatbot from './components/chatbot'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <PortfolioChatbot/>
    </div>
  )
}

export default App
