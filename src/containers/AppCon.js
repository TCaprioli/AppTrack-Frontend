import React from 'react';
import AppCard from '../components/AppCard'
import {connect} from 'react-redux'
import AppSearch from '../components/AppSearch'
import AppModal from '../components/AppModal'
import {CardDeck} from 'react-bootstrap'



const AppCon=(props)=>  {
    
    let {cardArray,input} = props

    let filteredCards = ()=>{
        let array = cardArray.filter(card => card.title.toLowerCase().includes(input) || card.company.toLowerCase().includes(input))
        return array
    }
    
    const mapCards= ()=>{
        let newArray = filteredCards().map(card => {
            return <AppCard key={card.id} cardData={card}/>
        })
        return newArray
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

export default connect(state=>({cardArray:state.cardObjects.data, input:state.searchTerm.input}))(AppCon);
