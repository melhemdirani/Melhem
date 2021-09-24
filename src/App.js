import React  from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Navbar from './Components/Navbar';


function App() { 
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About />
      <Skills />
      <Projects  />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;