const initialState= {
    data:[]
}


const cardDataReducer=(state=initialState,action)=>{
    let {payload,applications,id} = action
    switch(action.type){
        case 'FETCH_DATA':
            return {...state, data:applications}
        case 'SUBMIT_FORM':
            return {...state, data:[...state.data,payload]}
        case 'UPDATE_DATA':
            return {...state,data:[...state.data.map(data =>{
                if(data.id === payload.id){
                    return {...data,
                         title:payload.title,
                         company:payload.company,
                         description:payload.description,
                         applied:payload.applied
                    }
                }
                else{
                    return {...data}
                }
            })]}
        case 'REMOVE_CARD':
            return {...state, data:[...state.data.filter(data => data.id !== id)]}
        default:
            return state
    }
}

export default cardDataReducer