import React from 'react';
import AppCard from '../components/AppCard'
import {connect} from 'react-redux'
import AppSearch from '../components/AppSearch'
import AppModal from '../components/AppModal'
import {CardDeck} from 'react-bootstrap'



const AppCon=(props)=>  {
    const newArray=(array)=>array
    let {cardArray} = props
    const mapCards=()=>{
        let newCardArray = cardArray.map(card => {
            return <AppCard key={card.id} cardData={card}/>
        })

        return newCardArray

    }
    
    
        return (
        <div className='appcon'>
            <div className='searchcon'>
            <AppSearch/>
            <AppModal/>
            </div>
           
            
            
            <CardDeck>
                {mapCards()}
            </CardDeck>
        
        </div>
      );
    
}

export default connect(state=>({cardArray:state.cardArray}))(AppCon);
