import React from 'react';
import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import removeResume from '../actions/removeResume'
import { AiFillEdit } from "react-icons/ai"
import updateResumeName from '../actions/updateResumeName'
import { NavLink } from 'react-router-dom'
import showResumeData from '../actions/showResumeData'



class ResumeCard extends React.Component{
  state={
    clicked:false
  }
  //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
//   const time = new Date(this.props.cardData.created_at)
//   const appliedAt = `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`

   handleDelete=()=>{
    this.props.removeResume(this.props.cardData.id)
  }

   handleOnClick=()=>{
    // console.log(this.props.cardData)
    this.props.showResumeData(this.props.cardData)
  }

   handleUpdate=()=>{
    // console.log('update me')
    this.state.clicked === false?
    this.setState({
      clicked:true
    })
    :
    this.setState({
      clicked:false
    })
  }
  handleKeyPress=(event)=>{
    let {key,target} = event
    if(key === 'Enter'){
      event.preventDefault()
      this.props.updateResumeName(this.updateObj(target.value))
      // console.log(target.value)
      this.setState({
        clicked:false
      })
    }
  }

  updateObj=(name)=>({
    name,
    id: this.props.cardData.id
  })
  
  render(){

  // console.log(this.state)
        return (
            <Card>
            <Card.Body>
            {this.state.clicked === false?
              <Card.Title>
              {this.props.cardData.name === null?
              `Resume ${this.props.cardIndex}`
              :
              this.props.cardData.name}
            <Button size='sm' className='btn-primary title-btn' onClick={this.handleUpdate}>
              <AiFillEdit style={{position:'relative', left: -5, top: -5}}/>
            </Button>
            </Card.Title>
            :
            <Card.Title>
              <form onKeyPress={this.handleKeyPress}>
              <input type='text' placeholder='Edit Name' />
              </form>
            <Button size='sm' className='btn-primary title-btn' onClick={this.handleUpdate}>
              <AiFillEdit style={{position:'relative', left: -5, top: -5}}/>
            </Button>
            </Card.Title>
          
          }
              <Card.Subtitle className="mb-2 text-muted">{null}</Card.Subtitle>
                <NavLink
                to="/resumes/more-info"
                style={{textDecoration:'none', color:'white'}}>
                <Button variant="primary" onClick={this.handleOnClick}>
                 More Info
                </Button>
                </NavLink>
              <br/>
              <Button variant="primary" style={{position:'relative',top:'5px'}} onClick={this.handleDelete}>Delete</Button>
            </Card.Body>
            
          </Card>
      );
    }
}

export default connect(null,{showResumeData,removeResume,updateResumeName})(ResumeCard);
