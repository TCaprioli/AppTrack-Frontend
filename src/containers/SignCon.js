import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'




class SignCon extends React.Component {
    state={
        email:"".toLowerCase(),
        password:"",
        invalid:null,
        error:''
      }

    //Fetch creates new user
    signUpFetch= async ()=>{
        let resp = await fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.signUpObject())
        })
        let data = await resp.json()
        return data 
    }

    //Object being passed to fetch
    signUpObject=()=>({
        email:this.state.email,
        password:this.state.password
    })

    //Action being dispatched
    signUpUser=(userObj) =>({
        type:'LOG_USER',
        payload:userObj
    })


    handleSubmit = async (event)=>{
        event.preventDefault()
        let login = await this.signUpFetch()
        //login.error is true when the credientials are invalid
        if(login.error){
            console.log(login)
            this.setState({
                email:'',
                password:'',
                invalid:true,
                error: 'Username Taken or Password does not meet requirements'
            })
        }
        else{
            localStorage.setItem("token", login.jwt)
            this.props.dispatch(this.signUpUser)
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
    let {email, password, invalid,error} = this.state
        return (
        <div className='signcon'>
<<<<<<< HEAD
            <Formik
                initialValues={this.state.email, this.state.password}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={this.handleSubmit}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
           <Form onSubmit={this.handleSubmit}>
=======
           <Form validated={invalid} onSubmit={this.handleSubmit}>
>>>>>>> master
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" value={email}
                     placeholder="Enter email" onChange={this.handleInput}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
<<<<<<< HEAD
                    {errors.email && touched.email && errors.email}
=======
                    <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
>>>>>>> master
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name="password"
                    value={password} placeholder="Password" onChange={this.handleInput}/>
                    <Form.Text className="text-muted">
                    Password must be between 3-12 characters
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
             </Form>)}
            </Formik>
        </div>
      );
    }
}

export default connect()(SignCon);
