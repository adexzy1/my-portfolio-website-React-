import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/hero';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Projects from './components/projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="text-white bg-body font-poppins selection:bg-nav selection:text-white">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HireMe />
    </div>
  );
}

export default App;
