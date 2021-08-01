import React, {useState}  from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import About from './Components/About';
import Resume from './Components/Resume';
import ContactForm from './Components/ContactForm';


function App() { 
  const [cv, setCv] = useState(false)

  const showResume = () => {
      setCv(!cv)
  };
  
  return (
    <div className="App">
      { cv ===  true ?
        <Resume showResume={showResume}/>
      :
      <div>
        <Header showResume={showResume}/>
        <About showResume={showResume}/>
        <Projects  />
        <ContactForm />
        <Footer />
      </div>
      }
    </div>
  );
}


export default App;