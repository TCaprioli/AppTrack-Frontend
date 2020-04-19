import React from 'react';
import {Button,Navbar} from 'react-bootstrap'
import { AiFillEdit } from "react-icons/ai"
import {connect} from 'react-redux';
import CountCon from './CountCon'
import updateUser from '../actions/updateUser'



class DashCon extends React.Component{
    state={
        clicked:false,
        quote:'',
        author:''
    }
    

     async componentDidMount(){
        let resp = await fetch('https://quotes.rest/qod?language=en',{
            method:'GET',
            headers:{accept: 'application/json'}
        })
        let data = await resp.json()
        console.log(data.contents)
        
        this.setState({
            quote:data.contents.quotes[0].quote,
            author:data.contents.quotes[0].author
        })
    }

    handleUpdate=()=>{
        this.state.clicked === false?
        this.setState({
            clicked:true
        })
        :
        this.setState({
            clicked:false
        })
    }

    updateObj=(name)=>({
        name,
        id: this.props.user.id
      })

    handleKeyPress=(event)=>{
        let {key,target} = event
        if(key === 'Enter'){
          event.preventDefault()
          this.props.updateUser(this.updateObj(target.value))
        //   console.log(target.value)
          this.setState({
            clicked:false
          })
        }
      }

    render(){
    let {user} = this.props
    let {clicked} = this.state
    console.log(clicked)
        return (
        <div className="dashcon">
            {!clicked?
                <div>
                    <h1> 
                    {user.name?
                    `Welcome ${user.name}`
                    :
                    'Welcome User'
                    }
                    <Button size='sm' className='btn-primary title-btn' onClick={this.handleUpdate}>
                    <AiFillEdit style={{position:'relative', left: -5, top: -5}}/>
                    </Button></h1>
                </div>
                :
                <div>
                    <h1>Welcome </h1>
                    <form>
                        <input type='text'placeholder='Enter Name' onKeyPress={this.handleKeyPress}></input>
                        <Button size='sm' className='btn-primary title-btn' onClick={this.handleUpdate}>
                            <AiFillEdit style={{position:'relative', left: -5, top: -5}}/>
                        </Button>
                    </form>
                </div>
            }

            <div className='quotecon' style={{marginTop:'25px'}}>
                <h3>Quote of the Day</h3>
                <h6 className='dash-quote'>{`${this.state.quote}  -${this.state.author}`}</h6>
                <p style={{fontSize:'8px'}}>QOD powered by <a href='https://theysaidso.com/#'>'They Said So ®'</a></p>
            </div>
            <CountCon/>
        </div>
      );
    }
}

export default connect(state=>({user:state.loggedIn.currentUser.user}),{updateUser})(DashCon);
