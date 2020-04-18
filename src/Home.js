import React, { Component } from 'react';
import HomeCon from './containers/HomeCon'
import DashCon from './containers/DashCon'
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
          <>
       { this.props.loggedIn?
       <div>
         <DashCon/>
       </div>
       :
       <div className='home-main'>
            <HomeCon/>
        </div>
        
        }
        </>
      );
    }
}

export default connect(state=>({loggedIn:state.loggedIn.currentUser.user}),{profileFetch,fetchAppData})(Home);
