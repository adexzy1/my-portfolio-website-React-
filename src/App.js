import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Projects from './components/Projects';

function App() {
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const hireMe = useRef();
  const body = useRef();

  const style = {
    wrapper:
      'text-white bg-body font-poppins selection:bg-nav selection:text-white w-[1440px] max-w-[100%] m-auto',
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
      <Projects ref={projects} />
      <HireMe ref={hireMe} />
      <ScrollToTop bodyRef={body} />
    </div>
  );
}

export default App;
