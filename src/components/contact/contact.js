import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import { connect } from 'react-redux';
import Actions from '../../action/creators';

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.setState({
      items: [{key: 'a', opacity: 1, marginTop: 50}]
    })
  }

  navToHome() {
    this.setState({
      items: []
    })
    setTimeout(() => {
      this.props.toggleContactPage(!this.props.shouldShowContactPage)
      this.props.toggleHomePage(!this.props.shouldShowHomePage)
    }, 700)
  }

  willEnter() {
    return {opacity: 0, marginTop: 100};
  }

  willLeave() {
    return {opacity: spring(0), marginTop: spring(-50)};
  }

  render() {
    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={this.state.items.map( item => ({
          key: item.key,
          style: { opacity: spring(item.opacity), marginTop: spring(item.marginTop) }
        }))}
      >
      {
        int =>
        <div>
          {
            int.map( config => {
              return <div key={config.key} style={{...config.style}} className="row">
                <div className="col-sm-12 text-center">
                  <h1>Contact Us With Your Billion Dollar Idea</h1>
                </div>
                <button
                  onClick={() => this.navToHome()}
                  className="btn btn-primary center-block">
                  Home
                </button>
              </div>
            })
          }
        </div>
      }
      </TransitionMotion>
    )
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
    toggleHomePage: (shouldShow) => dispatch(Actions.toggleHomePage(shouldShow)),
    toggleContactPage: (shouldShow) => dispatch(Actions.toggleContactPage(shouldShow))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
