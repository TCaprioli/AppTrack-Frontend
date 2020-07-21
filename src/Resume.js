import React, { Component } from 'react';
import {connect} from 'react-redux'
import ResumeForm from './components/ResumeForm'
import profileFetch from './actions/profileFetch'
import ResumeCon from './containers/ResumeCon'
import fetchResumes from './actions/fetchResumes'
import './stylesheets/app.css'





class Resume extends Component {
  componentDidMount(){
    this.props.profileFetch()
    this.props.fetchResumes()  
}
  // file=async ()=> await this.props.documentURL
 
  render(){
   
        return (
        <div className='App'>
        
 
                <ResumeForm id={this.props.currentUser}/> 
                <ResumeCon className="App"/>
              
                {/* <iframe src={this.props.resumeData.resumes}/> */}
                

    
        
        </div>
      );
    }
}

export default connect(state=>({currentUser:state.loggedIn.currentUser, resumeData: state.resumeData}),{profileFetch,fetchResumes})(Resume);
