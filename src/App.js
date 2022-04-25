import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/hero';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Projects from './components/projects';
import Skills from './components/Skills';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const hireMe = useRef();
  const body = useRef();

  return (
    <div
      ref={body}
      className="text-white bg-body font-poppins selection:bg-nav selection:text-white"
    >
      <NavBar
        about={about}
        skills={skills}
        projects={projects}
        hireMe={hireMe}
      />
      <Hero />
      <About ref={about} />
      <Skills ref={skills} />
      <Projects ref={projects} />
      <HireMe ref={hireMe} />
      <ScrollToTop bodyRef={body} />
    </div>
  );
}

export default App;
