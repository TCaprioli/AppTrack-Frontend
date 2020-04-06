import React from 'react'
import {connect} from 'react-redux'

class ShowCon extends React.Component{
    render(){
        let {title,company,description} = this.props.showData
        return(
            <div>
                <h1>{title}</h1>
                <h2>{company}</h2>
                <p>{description}</p>
            </div>
        )
    }
}

export default connect(state=>({showData:state.showCard.data}))(ShowCon)