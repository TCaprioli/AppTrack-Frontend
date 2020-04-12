import React from 'react'
import {connect} from 'react-redux'
import updateApplication from '../actions/updateApplication'
import {Form, Button} from 'react-bootstrap'

class ShowCon extends React.Component{
    state={
        clicked:false,
        title:this.props.showData.title,
        company:this.props.showData.company,
        description:this.props.showData.description,
        applied:this.props.showData.applied
    }

    handleOnClick=(event)=>{
        let {clicked} = this.state
        !clicked?
        this.setState({
            clicked:true
        })
        :
        this.setState({
            clicked:false
        })
    }

    handleOnChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    updateObj=()=>({
        title:this.state.title,
        company:this.state.company,
        description:this.state.description,
        applied:this.state.applied,
        id:this.props.showData.id
    })

    handleOnSubmit=(event)=>{
        event.preventDefault()
        this.props.updateApplication(this.updateObj())
        this.setState({
            clicked:false
        })
    }
    render(){
        //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
        const time = new Date(this.props.showData.created_at)
        const appliedAt = `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`
        let {title,company,description,applied} = this.props.showData
        let {clicked} = this.state
        return(
            <div>
            {
                clicked === false?
                <span>
                <h1>{title}</h1>
                <h3 style={{color:'#6c757d'}}>{company}</h3>
                <hr/>
                <p>{description}</p>
                <hr/>
                <h6>Applied: {applied === null? appliedAt:applied}</h6>
                <Button onClick={this.handleOnClick}>Edit</Button>
                </span>
                :
                <Form onSubmit={this.handleOnSubmit}>
                Title: <Form.Control placeholder={title} name='title' onChange={this.handleOnChange}/>
                Company: <Form.Control  placeholder={company} name='company' onChange={this.handleOnChange}/>
                <hr/>
                Description: <Form.Control as='textarea' rows="3" placeholder={description} 
                name='description' onChange={this.handleOnChange}/>
                <hr/>
                <Form.Group>
                Applied: <Form.Control placeholder={appliedAt} name='applied' onChange={this.handleOnChange}/>
                </Form.Group>
                <Button type='submit'>Submit</Button>
                </Form>
            }
            </div>
        )
    }
}

export default connect(state=>({showData:state.showCard.data}),{updateApplication})(ShowCon)