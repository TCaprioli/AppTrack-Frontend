const initialState={
    resumes:[]
}

const resumeResReducer=(state=initialState,action)=>{
    let {type,payload,id} = action
    switch(type){
        case 'FETCH_RESUME':
            return {...state, resumes:payload }
        case 'ADD_RESUME':
            return {...state, resumes:[...state.resumes, payload.resume]}
        case 'UPDATE_RESUME':
            return {...state,resumes:[...state.resumes.map(resume =>{
                if(resume.id === payload.id){
                    return {...resume, name:payload.name}
                }
                else{
                    return {...resume}
                }
            })]}
        case 'REMOVE_RESUME':
            return {...state, resumes:[...state.resumes.filter(resume => resume.id !== id)]}
        default:
            return state
    }
}

export default resumeResReducer