import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import About from './components/about/about'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
        } else {
          entry.target.classList.remove('animate-fade-in-up');
          entry.target.classList.add('opacity-0');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className="container mx-auto px-4 py-8">
        {/* Placeholder for future sections */}
      </div>
    </>
  )
}

export default App
