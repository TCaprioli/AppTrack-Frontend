import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'
import addResumeFile from '../actions/addResumeFile'




class ShowForm extends React.Component {
  state={
      user_id:this.props.user.id,
      document:{}
  }
    
    
    

    handleSubmit = (event)=>{
        let {files} = this.state
        event.preventDefault()
        this.props.addResumeFile(files)
        
        
    }

  

    handleInput=(event)=>{
        this.setState({
            files:event.target.files[0]
        })
        
        
        
        
    }

    render(){
   
        return (
        <div className='logcon'>
           <Form encType="multipart/form-data" name="myForm"onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Add Resume</Form.Label>
                    <Form.Control type="file" name="file" onChange={this.handleInput}/>
                    <Form.Text className="text-muted">
                    Testing resume upload
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
             </Form>
        
        </div>
      );
    }
}

export default connect(state=>({user: state.loggedIn.currentUser.user}),{addResumeFile})(ShowForm);
