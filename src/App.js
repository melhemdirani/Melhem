import React, {useState}  from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import About from './Components/About';
import CancelIcon from '@material-ui/icons/Cancel'
import Resume from './Components/Resume';
import ContactForm from './Components/ContactForm';


function App() { 
  const [cv, setCv] = useState(false)
  const showResume = () => {
      setCv(!cv)
  };
  function Button () { 
    return(
    <div>
      <a href="#resume"><button className="primary_button" onClick={showResume}> My Resume</button></a>
  
    </div>
    )
  };
  return (
    <div className="App">
      { cv ===  true ?
      <div>
        <Resume />
        <button className="resume_button" onClick={showResume}> <CancelIcon/></button>
      </div>
      :
      <div>
        <Header showResume={showResume}/>
        <About Button={Button}/>
        <Projects />
        <ContactForm />
        <Footer />
      </div>
      }
    </div>
  );
}


export default App;