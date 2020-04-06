const initialState={
    data:{}
}

const showReducer=(state=initialState,action)=>{
    let {payload,type} = action 
    switch(type){
        case 'SHOW_CARD':
            return {...state, data:payload}
        default:
            return state
    }
}

export default showReducer