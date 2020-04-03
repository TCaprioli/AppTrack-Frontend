import React from 'react'
import './stylesheets/navbar.css'
import {connect} from 'react-redux';
import logoutUser from './actions/logoutUser'
import { NavLink } from 'react-router-dom'
import {Navbar, Container,NavDropdown,Button} from 'react-bootstrap'

const NavBar =(props)=>{
    let handleOnClick = (event) =>{
        
        localStorage.removeItem("token")
        props.logoutUser()
    }

    return(
        <div>
           <Navbar className='navbar' fixed="top">

                <NavDropdown title="Menu" id="nav-dropdown">
                    <NavDropdown.Item>
                    <NavLink
                        to='/apps'
                        exact
                        >
                            Applications
                        </NavLink> 
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink
                        to='/signup'
                        exact
                        >
                            signup
                        </NavLink> 
                    </NavDropdown.Item>
                    <NavDropdown.Item>Resumes</NavDropdown.Item>
                </NavDropdown>
                <Container className="mx-auto">
                    <h1><a className="title" href='/'>AppTrack</a></h1>
                </Container>
                {props.currentUser?
                <Button variant="success" href='/' onClick={handleOnClick}>Logout</Button>
                :
                <Button variant="success" href='/login'>Login</Button>}
            </Navbar>
        </div>
    )
}

export default connect(state=>({currentUser:state.loggedIn.currentUser}), {logoutUser})(NavBar)