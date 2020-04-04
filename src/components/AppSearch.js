import React from 'react';
import {connect} from 'react-redux'
import searchInput from '../actions/searchInput'
import {InputGroup,FormControl} from 'react-bootstrap'
import { IoIosSearch } from 'react-icons/io';



class AppSearch extends React.Component{
    
    handleOnChange =(event)=>{
     

        this.props.searchInput(event.target.value)
    }



    render(){
        return (
            <div className='searchcon'>
            <InputGroup size="sm"className="search">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{<IoIosSearch/>}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
                
                onChange={this.handleOnChange}
                />
            </InputGroup>
            </div>
            
       
      );
    }
}

export default connect(null,{searchInput})(AppSearch);
