import React from 'react'
import './stylesheets/navbar.css'
import {connect} from 'react-redux';
import logoutUser from './actions/logoutUser'
import { NavLink } from 'react-router-dom'
import {Navbar, Container,NavDropdown,Button,ListGroup} from 'react-bootstrap'

const NavBar =(props)=>{
    let handleOnClick = (event) =>{
        event.preventDefault()
        props.logoutUser()
        localStorage.removeItem("token")
        
        
    }

    return(
        <div>
            {console.log(props)}
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
                    <h1 style={{color:'white'}}><NavLink className="title" to='/' exact>AppTrack</NavLink></h1>
                </Container>
                {props.currentUser.user?
                <Button variant="success" onClick={handleOnClick}>
                    <NavLink
                        to='/'
                        exact
                        style={{textDecoration:'none'}}
                        >
                        Logout
                    </NavLink>
                </Button>
                :
                <Button variant="success" href='/login'>Login</Button>}
            </Navbar>
        </div>
    )
}

export default connect(state=>({currentUser:state.loggedIn.currentUser}), {logoutUser})(NavBar)