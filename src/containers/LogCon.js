import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'






class LogCon extends React.Component {
    state={
        email:"".toLowerCase(),
        password:"",
        invalid:null,
      }

    //Fetch checks to see if user account exists
    loginFetch= async ()=>{
        let resp = await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.loginObject())
        })
        let data = await resp.json()
        return data 
    }

    //Object being passed to fetch
    loginObject=()=>({
        email:this.state.email,
        password:this.state.password
    })

    //Action being dispatched
    loginUser=(userObj) =>({
        type:'LOG_USER',
        payload:userObj
    })

    //guest obj for demo
    guestObj=()=>({
        email: "guest@guest.com",
        password: "abc123"
    })

    loginGuest=()=>{
        this.setState({
            email: "guest@guest.com",
            password: "abc123"
        })
    
    }

    handleSubmit = async (event)=>{
        event.preventDefault()
        let login = await this.loginFetch()
        //login.message is true when the credientials are invalid
        if(login.message){
            console.log(login)
            this.setState({
                email:'',
                password:'',
                invalid:true
            })
        }
        else{
            localStorage.setItem("token", login.jwt)
            this.props.dispatch(this.loginUser)
            this.props.history.push('/')
        }
        

    }

    handleInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
            invalid:null
        })
    }

    render(){
    let {email, password,invalid} = this.state
        return (
        <div className='logcon'>
           <Form validated={invalid} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" value={email}
                     placeholder="Enter email" onChange={this.handleInput}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>Incorrect Username or Password</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name="password"
                    value={password} placeholder="Password" onChange={this.handleInput}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                 <span id='or'>or</span>
                <Button variant="primary" onClick={()=> this.loginGuest()}>
                    Demo
                </Button>
             </Form>
        
        </div>
      );
    }
}

export default connect()(LogCon);
