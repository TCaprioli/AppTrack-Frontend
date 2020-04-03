import React from 'react';
import {Card,Button} from 'react-bootstrap'



const AppCard=(props)=>  {
  
        return (
            <Card>
            <Card.Body>
              <Card.Title>{props.cardData.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.cardData.company}</Card.Subtitle>
              <Card.Text className="description">
                {props.cardData.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      );
    
}

export default AppCard;
