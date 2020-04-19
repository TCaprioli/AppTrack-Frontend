
export default (payload)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/applications',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(payload)
        })
         let data = await resp.json()
        console.log(data)
        dispatch(addData(data.application))
    }   
}

const addData = (payload)=>({
    type:'SUBMIT_FORM',payload
})