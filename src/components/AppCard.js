import React from 'react';
import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import removeCard from '../actions/removeCard'
import { NavLink } from 'react-router-dom'
import showCardData from '../actions/showCardData'



const AppCard=(props)=>  {

  //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
  const time = new Date(props.cardData.created_at)
  const month =()=>time.getMonth() + 1 <= 9? `0${time.getMonth() +1}`:time.getMonth() +1;
  const day =()=>time.getDate()<= 9? `0${time.getDate()}`:time.getDate();
  const appliedAt = `${time.getFullYear()}-${month()}-${day()}`

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
              <p>Applied: {props.cardData.applied === null? appliedAt:props.cardData.applied}</p>
              <hr/>
                <NavLink
                to="/applications/more-info"
                style={{textDecoration:'none', color:'white'}}>
                <Button variant="primary" onClick={handleOnClick}>
                 More Info
                </Button>
                </NavLink>
                <br/>
              <Button variant="primary" style={{position:'relative',top:'5px'}} onClick={handleDelete}>Delete</Button>
            </Card.Body>
            
          </Card>
      );
    
}

export default connect(null,{removeCard,showCardData})(AppCard);
