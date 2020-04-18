import React, { Component } from 'react';
import HomeCon from './containers/HomeCon'
import {connect} from 'react-redux';
import profileFetch from './actions/profileFetch'
import fetchAppData from './actions/fetchAppData'
import './stylesheets/home.css'



class Home extends Component {
    componentDidMount(){
        this.props.profileFetch()
        this.props.fetchAppData()
    }
  render(){
        return (
        <div className='home-main'>
            <HomeCon/>
            
        
        </div>
      );
    }
}

export default connect(null,{profileFetch,fetchAppData})(Home);
