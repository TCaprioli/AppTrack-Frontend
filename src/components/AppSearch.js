import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'
import { IoIosSearch } from 'react-icons/io';



const AppSearch=()=>  {
  
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
                />
            </InputGroup>
            </div>
            
       
      );
    
}

export default AppSearch;
