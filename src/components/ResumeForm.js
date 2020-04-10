import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'
import addResumeFile from '../actions/addResumeFile'




class ResumeForm extends React.Component {
  state={
      files:{}
  }
    
    
    

    handleSubmit = (event)=>{
        let {files} = this.state
        let id = this.props.id.user.id
        event.preventDefault()
        this.props.addResumeFile({id,files})
        console.log(this.state)
        
        
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

export default connect(null,{addResumeFile})(ResumeForm);
