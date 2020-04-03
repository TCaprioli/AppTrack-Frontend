const newArray=(array)=>array
const cardDataReducer=(state=[],action)=>{
    switch(action.type){
        case 'FETCH_DATA':
            return newArray(...state, action.jobs)
        case 'SUBMIT_FORM':
            return [...state, action.payload]
        default:
            return state
    }
}

export default cardDataReducer