import React from 'react'
import {connect} from 'react-redux'

class ShowCon extends React.Component{
    render(){
        //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
        const time = new Date(this.props.showData.created_at)
        const appliedAt = `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`
        let {title,company,description} = this.props.showData
        return(
            <div>
                <h1>{title}</h1>
                <h3 style={{color:'#6c757d'}}>{company}</h3>
                <hr/>
                <p>{description}</p>
                <hr/>
                <h6>Applied: {appliedAt}</h6>
            </div>
        )
    }
}

export default connect(state=>({showData:state.showCard.data}))(ShowCon)