const initialState ={
    currentUser:{user:undefined}
}

const signupReducer = (state=initialState,action) => {
    let {type,payload} = action
    switch (action.type){
        case 'LOG_USER':
            return {...state, currentUser:action.payload}
        case 'FAILED_LOG':
            return {...state, currentUser:action.error}
        case 'UPDATE_USER':
            return {...state, currentUser:{...state.currentUser, user:{...state.currentUser.user, name:payload.name}}}
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        default:
            return state
    }
}
export default signupReducer