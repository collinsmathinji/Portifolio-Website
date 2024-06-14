import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
