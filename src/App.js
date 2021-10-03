import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/hero';
import Section from './components/section';
import Details from './components/details';
import Projects from './components/projects';
import Footer from './components/footer';
import projectItems from './components/projectDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Section
          id="about"
          h3="About"
          p="Reserved & Cool Headed"
          classId="details"
          details={
            <Details
              h3="Introduction"
              p=" Hi i'm John Adekoya, i have a strong passion for web development.
              i am currently comfortable in building beautiful and functional
              user interface with HTML, CSS & javascript."
            />
          }
        />
        <Section
          id="education"
          h3="Education"
          p="Always learning new stuffs"
          classId="details"
          details={
            <Details
              h3="Accounting BS.c Honors"
              p="2016 - 2020 University of ilorin (Unilorin)"
            />
          }
        />
        <Section
          id="skills"
          h3="Skills"
          p="Work Hard & Play Hard"
          classId="details"
          details={
            <>
              <Details
                h3="HTML"
                p="I write clean and readable codes with HTML5"
              />
              <Details
                h3="CSS"
                p="I design beautiful and consistent user interface with CSS3"
              />
              <Details
                h3="Javascript"
                p="I write clear, functional and reusable javascript programs"
              />
            </>
          }
        />
        <Section
          id="projects"
          h3="Projects"
          p="beautiful and functional UI"
          classId="projects"
          details={projectItems.map((projectItem, index) => (
            <Projects
              key={index}
              img={projectItem.image}
              p={projectItem.p}
              href1={projectItem.href1}
              href2={projectItem.href2}
              alt={projectItem.alt}
            />
          ))}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
