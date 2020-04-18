import React from 'react'
import {connect} from 'react-redux'
import profileFetch from './actions/profileFetch'
import FolderModal from './components/folderModal'
import FolderCon from './containers/FolderCon'
import fetchFolders from './actions/fetchFolders'

import './stylesheets/folders.css'

class Folder extends React.Component{
 
    componentDidMount(){
        this.props.profileFetch()
        this.props.fetchFolders()
    }

    mapfolders=()=>{
        let {folderArray} = this.props
        let updatedArray = folderArray.map(folder => {
            return <FolderCon key={folder.id} folderData={folder} applications={this.props.currentUser.applications}/>
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

export default connect(state=>({currentUser: state.loggedIn.currentUser.user, folderArray:state.folderObjects.folders}),{profileFetch,fetchFolders})(Folder)