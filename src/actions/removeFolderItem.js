export default (id)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch(`http://localhost:3000/folderItems/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`,
                
              }
        })
        let data = await resp.json()
        console.log(data)
         
        // dispatch(itemRemove(data.applications))
    }
}

const itemRemove =(payload)=>({
    type: 'REMOVE_ITEM',
    payload
})
