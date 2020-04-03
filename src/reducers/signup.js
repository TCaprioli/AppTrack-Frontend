const initialState ={
    currentUser:null
}

const signupReducer = (state=initialState,action) => {
    switch (action.type){
        case 'LOG_USER':
            return {...state, currentUser:action.payload}
        case 'LOGOUT_USER':
            return {...state, currentUser: {} }
        default:
            return state
    }
}
export default signupReducer