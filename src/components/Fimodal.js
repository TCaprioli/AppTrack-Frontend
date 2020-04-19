import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import removeFolder from '../actions/removeFolder'
import addFolderItem from '../actions/addFolderItem'

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
      this.setState({
        application:''
      })
      }
    }

    handleOnChange =(event)=>{
        // console.log(event.target.value)
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

    handleAppRemove=()=>{

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
                     onChange={this.handleOnChange}>
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
 export default connect(state=>({currentUser:state.loggedIn.currentUser}),{addFolderItem,removeFolder})(FiModal);