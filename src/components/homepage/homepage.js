import React, { Component } from 'react';
// import TweenMax from 'gsap';
import { TransitionMotion, spring } from 'react-motion';
import { connect } from 'react-redux';
import Actions from '../../action/creators';
import './homepage.css';

class HomePage extends Component {

  // componentWillEnter (callback) {
  //   const el = this.refs.testItem
  //   TweenMax.fromTo(el, 1.0, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  // }
  //
  // componentWillLeave (callback) {
  //   const el = this.refs.testItem
  //   TweenMax.fromTo(el, 1.0, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  // }

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      paras: []
    }
  }

  componentDidMount() {
    this.setState({
      items: [{key: 'c', opacity: 1, marginTop: 50}] // remove c.
    });
    setTimeout(() => {
      this.trigParas();
    }, 1000)
  }

  navToContact() {
    this.setState({
      items: [],
      paras: []
    });
    setTimeout(() => {
      this.props.toggleHomePage(!this.props.shouldShowHomePage)
      this.props.toggleContactPage(!this.props.shouldShowContactPage)
    }, 800)
  }

  trigParas() {
    this.setState({
      paras: [{key: 'para1', opacity: 1, marginTop: 50}]
    })
  }

  componentWillUnmount() {
    this.setState({
      items: []
    })
  }

  willLeave() {
    return {opacity: spring(0), marginTop: spring(-50, {stiffness: 50, damping: 5})};
  }

  willEnter() {
    return {opacity: 0, marginTop: 100};
  }

  paraEnter() {
    return { opacity: 0, marginTop: 150};
  }

  paraLeave() {
    return { opacity: spring(0), marginTop: spring(-50, {stiffness: 50, damping: 5}) }
  }

  render() {
    return (
      <div>

        <TransitionMotion
          willLeave={this.willLeave}
          willEnter={this.willEnter}
          styles={this.state.items.map(item => ({
            key: item.key,
            style: {opacity: spring(item.opacity), marginTop: spring(item.marginTop)}
          }))}>
          {interpolatedStyles =>
            <div>
              {interpolatedStyles.map(config => {
                return <div key={config.key} className="row">
                    <div className="col-sm-12">
                      <h1 style={{...config.style}} className="text-center">Hello</h1>
                    </div>
                  </div>
              })}
            </div>
          }
        </TransitionMotion>

        <TransitionMotion
          willLeave={this.paraLeave}
          willEnter={this.paraEnter}
          styles={this.state.paras.map( para => ({
            key: para.key,
            style: { opacity: spring(para.opacity), marginTop: spring(para.marginTop, {stiffness: 100, damping: 11})}
          }))}
        >
        { int =>
          <div>
            { int.map(paraConfig => {
              return <div className="row" key={paraConfig.key} style={{...paraConfig.style, marginBottom: 100}}>
                    <div className="col-sm-12">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <button
                        onClick={ () => this.navToContact() }
                        className="btn btn-primary center-block homepage-button">
                        Contact
                      </button>
                    </div>
                  </div>
            })}
          </div>
        }
        </TransitionMotion>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shouldShowHomePage: state.app.showHomePage,
    shouldShowContactPage: state.app.showContactPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleContactPage: (shouldShow) => dispatch(Actions.toggleContactPage(shouldShow)),
    toggleHomePage: (shouldShow) => dispatch(Actions.toggleHomePage(shouldShow))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
