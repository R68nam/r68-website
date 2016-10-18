import React, { Component } from 'react';
// import TweenMax from 'gsap';
import { TransitionMotion, spring } from 'react-motion';
// import { connect } from 'react-redux';
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

  willLeave() {
    return { opacity: spring(0) }
  }

  initStyle() {
    return [
      {key: 'one', style: { opacity: spring(1) }}
    ]
  }

  render() {
    return (
      <TransitionMotion
        styles={ this.initStyle() }
        willLeave={ this.willLeave }
      >
        { int =>
          <div>
          { int.map( ( {key, style} ) =>
            <div className="container" ref="testItem" key={`${key}-trans`} style={{opacity: style.opacity}}>
              <div className="row content">
                <div className="col-sm-12">
                  <h1 className="text-center">Welcome To Our Awesome Website</h1>
                </div>
              </div>
            </div>
          )}
          </div>
        }
      </TransitionMotion>
    )
  }
}

export default HomePage;

// function mapStateToProps(state) {
//   return {
//     app: state.app
//   };
// }
//
// export default connect(mapStateToProps)(HomePage);
