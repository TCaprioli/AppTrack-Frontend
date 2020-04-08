import React from 'react';
import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import removeCard from '../actions/removeCard'
import { NavLink } from 'react-router-dom'
import showCardData from '../actions/showCardData'



const AppCard=(props)=>  {

  //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
  const time = new Date(props.cardData.created_at)
  const appliedAt = `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`

  let handleDelete=()=>{
    props.removeCard(props.cardData.id)
  }

  let handleOnClick=()=>{
    console.log(props.cardData)
    props.showCardData(props.cardData)
  }
  
        return (
            <Card>
            <Card.Body>
              <Card.Title>{props.cardData.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.cardData.company}</Card.Subtitle>
              <hr/>
              <p>Applied: {appliedAt}</p>
              <hr/>
              <Button variant="primary" onClick={handleOnClick}>
                <NavLink
                to="/applications/more-info"
                style={{textDecoration:'none', color:'white'}}>
                 More Info
                </NavLink>
              </Button><br/>
              <Button variant="primary" style={{position:'relative',top:'5px'}} onClick={handleDelete}>Delete</Button>
            </Card.Body>
            
          </Card>
      );
    
}

export default connect(null,{removeCard,showCardData})(AppCard);
