
export default (payload)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        
        let {name,id} = payload
        let resp = await fetch(`http://localhost:3000/resumes/${id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({name:name})
        })
         let data = await resp.json()
        console.log({data})
        
        dispatch(updateData(data))


    }   
}

const updateData=(payload)=>({
    type:'UPDATE_RESUME',
    payload
})