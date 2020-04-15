import React from 'react'
import './stylesheets/navbar.css'
import {connect} from 'react-redux';
import logoutUser from './actions/logoutUser'
import { NavLink } from 'react-router-dom'
import {Navbar, Container,NavDropdown,Button,ListGroup} from 'react-bootstrap'

const NavBar =(props)=>{
    let handleOnClick = (event) =>{
        
        localStorage.removeItem("token")
        props.logoutUser()
    }

    return(
        <div>
           <Navbar className='navbar' fixed="top">

                <NavDropdown title="Menu" id="nav-dropdown">
                   <ListGroup variant='flush' style={{textAlign:'center'}}>
                        <NavLink
                            to='/applications'
                            exact
                            style={{textDecoration:'none'}}
                            >
                        <ListGroup.Item action variant="light" style={{color:'black'}}>
                                Applications
                        </ListGroup.Item>
                            </NavLink>

                        <NavLink
                            to='/folders'
                            exact
                            style={{textDecoration:'none'}}
                            >
                        <ListGroup.Item action variant="light" style={{color:'black'}}>
                                Folders
                        </ListGroup.Item>
                        </NavLink>
                        
                            <NavLink
                            to='/resumes'
                            exact
                            style={{textDecoration:'none'}}
                            >
                            <ListGroup.Item action variant="light" style={{color:'black'}}>
                                Resumes
                             </ListGroup.Item>
                            </NavLink> 
                    </ListGroup>
                </NavDropdown>
                <Container className="mx-auto">
                    <h1 style={{color:'white'}}><a className="title" href='/'>AppTrack</a></h1>
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