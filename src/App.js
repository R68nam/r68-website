import React, { Component } from 'react';
import './App.css';

import TransitionGroup from 'react-addons-transition-group';

import HomePage from './components/homepage/homepage';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shouldShowHomePage: false
    }
  }

  toggleHomePage() {
    this.setState({
      shouldShowHomePage: !this.state.shouldShowHomePage
    });
  }

  render() {
    return (
      <div>

        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>

        <button
          onClick={ () => this.toggleHomePage() }
          className="btn btn-primary center-block homepage-button">
          Toggle HomePage
        </button>

        <TransitionGroup>
          { this.state.shouldShowHomePage && <HomePage/> }
        </TransitionGroup>

      </div>
    );
  }
}

export default App;
