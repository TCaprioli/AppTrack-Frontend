
export default (payload)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/jobs',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(payload)
        })
         let data = await resp.json()
         let job = {...data.job.job}
         
         dispatch(addData(job))
    }   
}

const addData = (payload)=>({
    type:'SUBMIT_FORM',payload
})