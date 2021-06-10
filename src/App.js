import React, { Component } from 'react';
import './App.css';
import './Hidden.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Resume from './Components/Resume';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Scroll from './Components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
      }
    }
  render() {
    return (
      <Router>
        <Scroll/>
      <div className="App">
        <Switch>
        <Route exact path='/Melhem'>
          <Header/>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Route>
        <Route exact path='/resume'>
          <Resume/>
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}


export default App;