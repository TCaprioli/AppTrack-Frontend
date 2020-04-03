import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import addFormInput from '../actions/addFormInput'

class AppModal extends React.Component {
  state={
    show:false,
    title:'',
    company:'',
    description:''
  }
    payload=()=>({
      title:this.state.title,
      company:this.state.company,
      description:this.state.description
    })
    handleSubmit=(event)=>{
      event.preventDefault()
      this.props.addFormInput(this.payload())
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
        <Button className="modal-btn" variant="primary" onClick={this.handleShow}>
          <p className="btn-text">+</p>
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} 
                    placeholder="Software Engineer" onChange={this.handleOnChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" name="company" value={this.state.company} 
                    placeholder="Google" onChange={this.handleOnChange}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="description" value={this.state.description} onChange={this.handleOnChange}/>
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
 export default connect(null,{addFormInput})(AppModal);