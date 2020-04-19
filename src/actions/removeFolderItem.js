export default (id)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch(`http://localhost:3000/folder_items/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`,
                
              }
        })
        let data = await resp.json()
        console.log(data)
         
        dispatch(itemRemove(data.folder_items))
    }
}

const itemRemove =(payload)=>({
    type: 'REMOVE_ITEM',
    payload
})
