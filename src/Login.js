import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import LogCon from './containers/LogCon';
import './stylesheets/log.css'




class Login extends Component {
    

    
    
  render(){
        return (
        <div >
        <h1 className='logtitle'>Login</h1>
        <LogCon/> 
        <p className='logtext'>
        Don't have an account? Sign up <NavLink style={{position:"relative", left:"4px"}} to="/signup">here</NavLink>
        </p>
    
        </div>
      );
    }
}

export default Login;
