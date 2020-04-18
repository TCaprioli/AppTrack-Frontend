import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import addFolderItem from '../actions/addFolderItem'

class FiModal extends React.Component {
  state={
    show:false,
    application:''
  }
    payload=()=>({
      application_id:Number(this.state.application),
      folder_id:this.props.folderData.id
    })

    handleSubmit=(event)=>{
      event.preventDefault()
      this.props.addFolderItem(this.payload())
      this.setState({
        application:''
      })
    }

    handleOnChange =(event)=>{
        console.log(event.target.value)
      this.setState({
        application:event.target.value
      })
    }

    mapApplications=()=>{
        let updatedArray = this.props.appArray.map(app => {
        return <option key={app.id} value={app.id}>{`${app.title} | ${app.company}`}</option>
        })

        return updatedArray
    }
    handleDelete=()=>{

    }
  
    handleClose = () => {
      this.setState({
        show:false
      })
    }

    handleShow = () => {
      this.setState({
        show:true
      })
    };
    render(){
        // console.dir(this.state.application)
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
                    <Button variant='danger' style={{position:'relative', left:'5px'}} onClick={this.handleDelete}>
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
 export default connect(state=>({currentUser:state.loggedIn.currentUser}),{addFolderItem})(FiModal);