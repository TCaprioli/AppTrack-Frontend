import React from 'react'
import ShowCon from './containers/ShowCon'
import './stylesheets/show.css'
import { IoMdArrowBack } from "react-icons/io";

class AppShow extends React.Component{
    handleOnClick=()=>{
        window.history.back()
    }
    render(){
        return(
            <>
            <div className='backbtn'>
                <button onClick={this.handleOnClick}><IoMdArrowBack/></button>
            </div>
             
            <div className='mx-auto showcon'>
                <ShowCon/>
            </div>
            </>
        )
    }
}

export default AppShow