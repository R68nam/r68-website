import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from './action/creators';
import './App.css';

import HomePage from './components/homepage/homepage';
import Contact from './components/contact/contact'

class App extends Component {
  render() {
    return (
      <div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="container">
        { this.props.shouldShowHomePage ? <HomePage /> : null }
        { this.props.shouldShowContactPage ? <Contact /> : null }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  shouldShowHomePage: PropTypes.bool,
  shouldShowContactPage: PropTypes.bool,
  toggleHomePage: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    shouldShowHomePage: state.app.showHomePage,
    shouldShowContactPage: state.app.showContactPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHomePage: (shouldShow) => dispatch(Actions.toggleHomePage(shouldShow))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
