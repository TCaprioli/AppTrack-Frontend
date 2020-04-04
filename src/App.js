import React, { Component } from 'react';
import AppCon from './containers/AppCon'

import {connect} from 'react-redux';
import profileFetch from './actions/profileFetch'
import fetchJobData from './actions/fetchAppData'
import './stylesheets/app.css'



class App extends Component {
  componentDidMount(){
    this.props.profileFetch()
    this.props.fetchJobData()
}
  render(){
    
        return (
        <div className="App">
          <AppCon/>
         
        </div>
      );
    }
}

export default connect(state=>({currentUser:state.loggedIn.currentUser}),{profileFetch, fetchJobData})(App);
