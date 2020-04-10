const initialState={
    resume:{},
    url:{}
}

const showReducer=(state=initialState,action)=>{
    let {payload,type} = action 
    switch(type){
        case 'SHOW_RESUME':
            return {...state, resume:payload}
        case 'SHOW_URL':
            return {...state,url:payload}
        default:
            return state
    }
}

export default showReducer