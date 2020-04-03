
export default ()=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/jobs',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              },
            
        })
         let data = await resp.json()
         dispatch(fetchData(data.jobs))
    }   
}

const fetchData=(jobs)=>({
    type:'FETCH_DATA',
    jobs
})