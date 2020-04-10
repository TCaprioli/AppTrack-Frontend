import React from 'react';
import ResumeCard from '../components/ResumeCard'
import {connect} from 'react-redux'
import {CardDeck} from 'react-bootstrap'




const ResumeCon=(props)=>  {
    
    
  
    const mapCards= ()=>{
        let newArray = props.resumeArray.map((card,index) => {
            return <ResumeCard key={card.id} cardIndex={index + 1} cardData={card}/>
        })
        return newArray
    }
    
   

        return (
        <div className='appcon' style={{marginTop:'-150px'}}>
            
           
            
            
            <CardDeck>
                {mapCards()}
            </CardDeck>
        
        </div>
      );
    
}

export default connect(state=>({resumeArray:state.resumeData.resumes}))(ResumeCon);
