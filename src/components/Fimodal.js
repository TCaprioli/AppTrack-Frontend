import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import removeFolder from '../actions/removeFolder'
import addFolderItem from '../actions/addFolderItem'
import removeFolderItem from '../actions/removeFolderItem'

class FiModal extends React.Component {
  state={
    show:false,
    application:'',
    appArray:this.props.appArray
  }
    payload=()=>({
      application_id:Number(this.state.application),
      folder_id:this.props.folderData.id
    })

    handleSubmit=(event)=>{
      event.preventDefault()
      if(this.state.application !== ''){
      this.props.addFolderItem(this.payload())
      }
    }

    handleOnChange =(event)=>{
        console.log(event.target.value)
      this.setState({
        application:event.target.value
      })
    }

    mapApplications=()=>{
        let updatedArray = this.state.appArray.map(app => {
        return <option key={app.id} value={app.id}>{`${app.title} | ${app.company}`}</option>
        })

        return updatedArray
    }
    handleDelete=()=>{
      this.props.removeFolder(this.props.folderData.id)
    }
  
    handleClose = () => {
      this.setState({
        show:false
      })
    }

    handleAppRemove=(event)=>{
      event.persist()
      let {folderData} = this.props
      console.log(this.state.application, this.props.folderData.id )
      console.log(this.props.folderData.folderItems)
      let folderItem = folderData.folderItems.find(folderI =>{
        if(folderI.application.id === Number(this.state.application)){
          return folderI.id
        }
      })
      // console.log(folderItem.id)
      if(this.props.folderData.folderItems.length !== 0){
        console.log(true)
        this.props.removeFolderItem(folderItem.id)
      }
      
    }

    handleShow = () => {
      this.setState({
        show:true
      })
    };
    render(){
    return (
      <>
        <Button size='sm'className='addFI' onClick={this.handleShow}>
            <p className="butn-text">+</p>
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Control as="select" name="application"  
                     onChange={this.handleOnChange} onFocus={this.handleOnChange}>
                     <option>Select Application</option>
                     {this.mapApplications()}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary" >
                      Save Changes
                    </Button>
                    <Button variant='secondary' style={{position:'relative', left:'5px'}} onClick={this.handleAppRemove}>
                      Remove Application
                    </Button>
                    <Button variant='danger' style={{position:'relative', left:'10px'}} onClick={this.handleDelete}>
                      Delete Folder
                    </Button>

                </Form.Group>
             </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
 export default connect(state=>({currentUser:state.loggedIn.currentUser}),{addFolderItem,removeFolder,removeFolderItem})(FiModal);