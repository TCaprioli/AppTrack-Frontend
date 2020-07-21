import React, { Component } from 'react';
import HomeCon from '../containers/HomeCon';
import DashCon from '../containers/DashCon';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import profileFetch from '../actions/profileFetch';
import fetchAppData from '../actions/fetchAppData';
import '../stylesheets/home.css';

class Home extends Component {
  componentDidMount() {
    this.props.profileFetch();
  }
  render() {
    // console.log(!!this.props.loggedIn);
    return (
      <div id='home'>
        {this.props.loggedIn ? (
          <div className="dash-main">
            <DashCon />
            <Navbar fixed="bottom">
              <p
                className="mr-auto"
                style={{ width: '300px', fontSize: 'small', color: 'white' }}
              >
                AppTrack by Tyler Caprioli
              </p>
              <Nav.Link
                className="mr-2"
                style={{ color: 'white' }}
                href="https://github.com/TCaprioli"
              >
                <FaGithub />
              </Nav.Link>
              <Nav.Link
                style={{ color: 'white' }}
                href="https://www.linkedin.com/in/tylercaprioli/"
              >
                <FaLinkedin />
              </Nav.Link>
              <Nav.Link
                style={{ color: 'white' }}
                href="https://medium.com/@caprioli.tyler"
              >
                <FaMedium />
              </Nav.Link>
            </Navbar>
          </div>
        ) : (
          <div className="home-main">
            <HomeCon />
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({ loggedIn: state.loggedIn.currentUser.user }),
  { profileFetch }
)(Home);
