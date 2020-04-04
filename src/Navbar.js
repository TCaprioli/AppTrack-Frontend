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
                        <ListGroup.Item action variant="light" >
                            <NavLink
                            to='/apps'
                            exact
                            style={{textDecoration:'none',color:'black'}}
                            >
                                Applications
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item action variant="light">
                            <NavLink
                            to='/signup'
                            exact
                            style={{textDecoration:'none',color:'black'}}
                            >
                                signup
                            </NavLink> 
                        </ListGroup.Item>
                    </ListGroup>
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