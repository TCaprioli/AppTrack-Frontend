
export default (payload)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/folderItems',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(payload)
        })
         let data = await resp.json()
        // console.log(data.folder_items[0])
        dispatch(addData(data.folder_items))
    }   
}

const addData = (payload)=>({
    type:'ADD_ITEM',payload
})