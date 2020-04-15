import React from 'react';
import ResumeCard from '../components/ResumeCard'
import {connect} from 'react-redux'
import {CardDeck} from 'react-bootstrap'
import TouchCarousel from 'react-touch-carousel'




const FolderCon=(props)=>  {
    
    
  
  
    
   

        return (
        <div style={{textAlign:'center'}}>
        <hr/>
           Folder Name
           <TouchCarousel></TouchCarousel>
            
            
            
        <hr/>
        </div>
      );
    
}

export default connect()(FolderCon);
