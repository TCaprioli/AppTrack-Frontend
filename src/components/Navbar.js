import React from 'react';
import '../stylesheets/navbar.css';
import { connect } from 'react-redux';
import logoutUser from '../actions/logoutUser';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Container,
  NavDropdown,
  Button,
  ListGroup,
} from 'react-bootstrap';

const NavBar = (props) => {
  let handleOnClick = (event) => {
    // event.preventDefault();
    props.logoutUser();
    localStorage.removeItem('token');
  };

  console.log(props)
  return (
    <div>
      <Navbar className="navbar" fixed="top">
        {props.currentUser.user? 
        <NavDropdown title="Menu" id="nav-dropdown">
        <ListGroup variant="flush" style={{ textAlign: 'center' }}>
          <NavLink
            to="/applications"
            exact
            style={{ textDecoration: 'none' }}
          >
            <ListGroup.Item action variant="light" style={{ color: 'black' }}>
              Applications
            </ListGroup.Item>
          </NavLink>

            <ListGroup.Item  disabled >
              Folders
            </ListGroup.Item>
          

            <ListGroup.Item  disabled >
              Resumes
            </ListGroup.Item>
        </ListGroup>
      </NavDropdown>
        :
        null
        }
        
        <Container className="mx-auto">
            <NavLink id='nav-title' className="title" to="/" exact>
              AppTrack
            </NavLink>
        </Container>
        {props.currentUser.user ? (
          <NavLink className='log-btn' to="/" exact style={{ textDecoration: 'none' }}>
            <Button variant="success" onClick={handleOnClick}>
              Logout
          </Button>
            </NavLink>
        ) : (
          <NavLink className='log-btn' to="/login" exact style={{ textDecoration: 'none' , position: 'fixed', right: 20}}>
            <Button variant="success">
              Login
          </Button>
            </NavLink>
        )}
      </Navbar>
    </div>
  );
};

export default connect(
  (state) => ({ currentUser: state.loggedIn.currentUser }),
  { logoutUser }
)(NavBar);
