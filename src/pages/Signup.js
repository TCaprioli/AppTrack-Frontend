import React, { Component } from 'react';
import SignCon from '../containers/SignCon';
import '../stylesheets/sign.css';

class Signup extends Component {
  render() {
    return (
      <div>
        <h1 className="signtitle">Sign Up</h1>
        <SignCon history={this.props.history} />
      </div>
    );
  }
}

export default Signup;
