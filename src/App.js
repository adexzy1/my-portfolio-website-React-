import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const hireMe = useRef();
  const body = useRef();

  const style = {
    wrapper:
      'text-white bg-body font-poppins selection:bg-nav selection:text-white',
  };

  return (
    <div ref={body} className={style.wrapper}>
      <NavBar
        about={about}
        skills={skills}
        projects={projects}
        hireMe={hireMe}
      />
      <Hero />
      <About ref={about} />
      <Skills ref={skills} />

      <HireMe ref={hireMe} />
      <ScrollToTop bodyRef={body} />
    </div>
  );
}

export default App;
