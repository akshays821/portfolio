import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import About from './components/about/about'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="container mx-auto px-4 py-8">
        {/* Placeholder for future sections */}
      </div>
    </>
  )
}

export default App
