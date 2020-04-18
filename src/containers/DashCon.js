import React from 'react';
import {Button,Form} from 'react-bootstrap'
import { AiFillEdit } from "react-icons/ai"
import {connect} from 'react-redux';



const DashCon=(props)=>  {
    let handleUpdate=()=>{

    }

    let {user} = props
    
        return (
        <div className="dashcon">
           {user.name?
           <div>
               Welcome {user.name}
           </div>
           :
           <div>
              <h1> Welcome User
            <Button size='sm' className='btn-primary title-btn' onClick={handleUpdate}>
              <AiFillEdit style={{position:'relative', left: -5, top: -5}}/>
            </Button></h1>
           </div>
           

        }
        </div>
      );
    
}

export default connect(state=>({user:state.loggedIn.currentUser.user}))(DashCon);
