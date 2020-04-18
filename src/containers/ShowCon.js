import React from 'react'
import {connect} from 'react-redux'
import updateApplication from '../actions/updateApplication'
import {Form, Button} from 'react-bootstrap'

class ShowCon extends React.Component{
    state={
        //clicked toggles display and form
        clicked:false,
        //following 4 are form inputs
        title:this.props.showData.title,
        company:this.props.showData.company,
        description:this.props.showData.description,
        applied:this.props.showData.applied,
        //resumeArray displays user's resumes for form select
        resumeArray:this.props.currentUser.resumes,
        //resapp holds the selected resume id from the form
        resapp:'',
        //resappArray holds all of the resumes connected to this instance of the application
        resappArray:[]
    }

    async componentDidMount(){
        try{
        let id = this.props.showData.id
        let token = localStorage.token
        let resp = await fetch(`http://localhost:3000/applications/${id}`,{
            method:'GET',
            headers: {'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
              }
            })
        let data = await resp.json()
        this.setState({
            resappArray:data.application.resapps
        })
        }catch(error){
            console.warn(error)
        }
    }

    handleOnClick=(event)=>{
        let {clicked} = this.state
        !clicked?
        this.setState({
            clicked:true
        })
        :
        this.setState({
            clicked:false
        })
    }

    handleOnChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    updateObj=()=>({
        title:this.state.title,
        company:this.state.company,
        description:this.state.description,
        applied:this.state.applied,
        id:this.props.showData.id
    })

    mapOptions=()=>{
        let {resumeArray} = this.state
        let updatedArray = resumeArray.map(resume => {
        return  <option key={resume.id} value={resume.id}>{resume.name}</option>
        })
        return updatedArray
    }

    addResapp=async ()=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/resapps',{
            method:'POST',
            headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({resume_id:Number(this.state.resapp), application_id:this.props.showData.id})
        })
        let data = await resp.json()
        let newJoiner = data.resapp.resume
        this.setState({
            resappArray:[...this.state.resappArray, newJoiner]
        })
    }

    mapResapps=()=>{
        let {resappArray} = this.state
        let updatedArray = resappArray.map(resapp =>{
        return <div key={resapp.resume_id}>{resapp.resume_name} <button onClick={this.handleDelete} id={`${resapp.id}`} style={{borderRadius:'15px',outline:'none'}}>x</button></div>
        })
        return updatedArray
    }

    handleDelete=(event)=>{
        let token = localStorage.token
        let id= Number(event.target.id)
        let updatedArray = this.state.resappArray.filter(resapp => resapp.id !== id)
        console.log(updatedArray)
        console.log(this.state.resappArray)
        console.log(id)
        this.setState({
            resappArray:updatedArray
        })
        fetch(`http://localhost:3000/resapps/${id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
              }
            })
       
        
    }

    handleOnSubmit=(event)=>{
        event.preventDefault()
        this.props.updateApplication(this.updateObj())
        if(this.state.resapp !== ''){
            this.addResapp()
        }
        this.setState({
            clicked:false
        })
    }
    render(){
        //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
        const time = new Date(this.props.showData.created_at)
        const month =()=>time.getMonth() + 1 <= 9? `0${time.getMonth() +1}`:time.getMonth() +1;
        const day =()=>time.getDate()<= 9? `0${time.getDate()}`:time.getDate();
        const appliedAt = `${time.getFullYear()}-${month()}-${day()}`

        //deconstructions
        let {title,company,description,applied} = this.props.showData
        let {clicked,resappArray} = this.state

        return(
            <div>
            {
                clicked === false?
                <span>
                <h1>{title}</h1>
                <h3 style={{color:'#6c757d'}}>{company}</h3>
                <hr/>
                <p>{description}</p>
                <hr/>
                <h6>Applied: {applied === null? appliedAt:applied}</h6>
                <hr/>
                <h5>Resume(s) used:</h5>
                <span style={{marginTop:'25px', contentAlign:'center'}}>
                {this.mapResapps()}
                </span>
                <hr/>
                <Button onClick={this.handleOnClick}>Edit</Button>
                </span>
                :
                <Form onSubmit={this.handleOnSubmit}>
                Title: <Form.Control placeholder={title} name='title' onChange={this.handleOnChange}/>
                Company: <Form.Control  placeholder={company} name='company' onChange={this.handleOnChange}/>
                <hr/>
                Description: <Form.Control as='textarea' rows="3" placeholder={description} 
                name='description' onChange={this.handleOnChange}/>
                <hr/>
                Applied: <Form.Control type='date'placeholder={appliedAt} name='applied' onChange={this.handleOnChange}/>
                <hr/>
                Resume(s) used:
                <Form.Control as='select' name='resapp' onChange={this.handleOnChange} onFocus={this.handleOnChange}>
                <option value=''>Select Resume</option>
                {this.mapOptions()}
                </Form.Control>
                <hr/>
                <Button type='submit'>Submit</Button>
                </Form>
            }
            </div>
        )
    }
}

export default connect(state=>({showData:state.showCard.data, currentUser:state.loggedIn.currentUser.user}),{updateApplication})(ShowCon)