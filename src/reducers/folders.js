
const initialState={
    folders:[{id:undefined,name:undefined,folderItems:[]}]
}



const folderReducer=(state=initialState,action)=>{
    let {type,payload,id} = action
    switch(type){
        case 'FETCH_FOLDER':
            return {...state, folders:[...payload] }
        case 'ADD_FOLDER':
            return {...state, folders:[...state.folders, payload]}
        case 'ADD_ITEM':
            return {...state, folders:[...state.folders.map(folder =>{
                if(folder.id === payload[0].folder.id){
                    return {...folder,folderItems:[...payload]}
                }
                else{
                    return {...folder}
                }
            })
        ]}
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
        case 'DELETE_APP':
            return {...state, folders:[...payload]}
        case 'REMOVE_ITEM':
            return {...state, folders:[...state.folders.map(folder =>{
                if(payload.length === 0){
                    return {...folder, folderItems:[...payload]}
                }
                else if(folder.id === payload[0].folder.id){
                    return {...folder,folderItems:[...payload]}
                }
                else{
                    return {...folder}
                }
            })
        ]}
        default:
            return state
    }
}


export default folderReducer