import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from './action/creators';
import './App.css';

import HomePage from './components/homepage/homepage';

class App extends Component {
  render() {
    return (
      <div>

        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>

        <button
          onClick={ () => this.props.toggleHomePage(!this.props.shouldShowHomePage) }
          className="btn btn-primary center-block homepage-button">
          Toggle HomePage
        </button>

        <HomePage>
          { this.props.shouldShowHomePage ? <div>Hello World</div> : null }
        </HomePage>

      </div>
    );
  }
}

App.propTypes = {
  shouldShowHomePage: PropTypes.bool,
  toggleHomePage: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    shouldShowHomePage: state.app.showHomePage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHomePage: (shouldShow) => dispatch(Actions.toggleHomePage(shouldShow))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
