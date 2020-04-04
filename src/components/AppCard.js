import React from 'react';
import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import removeCard from '../actions/removeCard'



const AppCard=(props)=>  {

  let handleDelete=()=>{
    props.removeCard(props.cardData.id)
  }
  
        return (
            <Card>
            <Card.Body>
              
              <Card.Title>{props.cardData.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.cardData.company}</Card.Subtitle>
              <Button variant="primary" >More Info</Button><br/>
              <Button variant="primary" style={{position:'relative',top:'5px'}} onClick={handleDelete}>Delete</Button>
            </Card.Body>
            
          </Card>
      );
    
}

export default connect(null,{removeCard})(AppCard);
