import React from 'react';
import './App.css';
import './Hidden.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';

function App () {
  return (
    <div className="App">
      <Header/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
