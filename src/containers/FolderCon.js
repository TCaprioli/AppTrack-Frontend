import React from 'react';
import AppCard from '../components/AppCard'
import {connect} from 'react-redux'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FiModal from '../components/Fimodal'




const FolderCon=(props)=>  {

  const mapSlides=()=>{
    let updatedArray= props.folderData.folderItems.map((fi,index) =>{
    return <Slide key={fi.id} index={index}><AppCard cardData={fi.application}/></Slide>
    })
    
    return updatedArray
  }

        return (
        <div style={{textAlign:'center'}}>
        <hr/>
           <h2>{props.folderData.name} <FiModal folderData={props.folderData} appArray={props.applications}/></h2> 
           <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={mapSlides().length}
        visibleSlides={3}
      >
        <Slider>
          {mapSlides()}
        </Slider>
       
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
           
 
            
        <hr/>
        </div>
      );
    
}




export default connect()(FolderCon);
