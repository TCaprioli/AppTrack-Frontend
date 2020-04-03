import React, { Component } from 'react';
import HomeCon from './containers/HomeCon'
import {connect} from 'react-redux';
import profileFetch from './actions/profileFetch'
import './stylesheets/home.css'



class Home extends Component {
    componentDidMount(){
        this.props.profileFetch()
    }
  render(){
        return (
        <div className='home-main'>
            <HomeCon/>
            
        
        </div>
      );
    }
}

export default connect(null,{profileFetch})(Home);
