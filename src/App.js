import React, { Component } from 'react';
import './App.css';
import './Hidden.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Cv from './Components/Cv';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
      }
    }
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  render() {
    const {route} = this.state;
    return (
      <div className="App">
        { route === 'Cv' ?
          <Cv onRouteChange={this.onRouteChange}/> : (
          <div className="App">
            <Header/>
            <About onRouteChange={this.onRouteChange} />
            <Projects />
            <Contact />
            <Footer />
          </div>)}
      </div>
    );
  }
}


export default App;
