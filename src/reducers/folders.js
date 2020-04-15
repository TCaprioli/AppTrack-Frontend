const initialState={
    folders:[]
}

const folderResReducer=(state=initialState,action)=>{
    let {type,payload,id} = action
    switch(type){
        case 'FETCH_FOLDER':
            return {...state, folders:payload }
        case 'ADD_FOLDER':
            return {...state, folders:[...state.folders, payload.folder]}
        case 'UPDATE_FOLDER':
            return {...state,folders:[...state.folders.map(folder =>{
                if(folder.id === payload.id){
                    return {...folder, name:payload.name}
                }
                else{
                    return {...folder}
                }
            })]}
        case 'REMOVE_FOLDER':
            return {...state, folders:[...state.folders.filter(folder => folder.id !== id)]}
        default:
            return state
    }
}

export default folderResReducer