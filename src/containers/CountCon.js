import React from 'react';
import {connect} from 'react-redux'


class CountCon extends React.Component {
    state={
        applications:[]
    }
    
    async componentDidMount(){
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/appmonth',{
            method:'GET',
            headers:{'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`}
        })
        let data = await resp.json()
        console.log(data.users)
        this.setState({
            applications: data.users
        })
    }

    render(){
        return (
        <div className="mx-auto countcon" style={{marginTop:'25px'}}>
            Applications This Month:
           <h1 style={{fontSize:100}}>{this.state.applications.length}</h1>
        
        </div>
      );
        }
}

export default connect()(CountCon);
