const initialState={
    input:''
}

const searchReducer=(state=initialState,action)=>{
    let {text,type}=action
    switch(type){
        case 'SEARCH_INPUT':
            return {...state, input:text.toLowerCase()}
        default:
            return state
    }
}

export default searchReducer