import React from 'react'
import {connect} from 'react-redux'
import profileFetch from './actions/profileFetch'
import FolderModal from './components/folderModal'
import FolderCon from './containers/FolderCon'
import './stylesheets/folders.css'

class Folder extends React.Component{
    state={
        folders: this.props.currentUser.folders,
        applications: this.props.currentUser.applications
    }
    componentDidMount(){
        this.props.profileFetch()
        // this.props.fetchJobData()
    }

    mapfolders=()=>{
        let {folders} = this.state
        let updatedArray = folders.map(folder => {
            return <FolderCon/>
        })

        return updatedArray
    }
    render(){
        return(
            <div className="Folder">
               <h2 style={{paddingBottom:'40px'}}>Folders</h2> 
               <FolderModal/>

               {this.mapfolders()}


            </div>
        )
    }
}

export default connect(state=>({currentUser: state.loggedIn.currentUser.user}),{profileFetch})(Folder)