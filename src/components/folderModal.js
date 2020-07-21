import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import addFolder from '../actions/addFolder'

class FolderModal extends React.Component {
  state={
    show:false,
    name:''
  }
    payload=()=>({
      name:this.state.name,
      user_id:this.props.currentUser.user.id
    })

    handleSubmit=(event)=>{
      event.preventDefault()
      this.props.addFolder(this.payload())
      this.setState({
        name:''
      })
    }

    handleOnChange =(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
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
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Folder
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Folder</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" name="name" value={this.state.name} 
                     onChange={this.handleOnChange}/>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary" >
                      Save Changes
                    </Button>
                    <Button style={{position:'relative', left:'5px'}}variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                </Form.Group>
             </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
 export default connect(state=>({currentUser:state.loggedIn.currentUser}),{addFolder})(FolderModal);