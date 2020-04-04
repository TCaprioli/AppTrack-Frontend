
export default ()=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let resp = await fetch('http://localhost:3000/profile',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              }
            
        })
         let data = await resp.json()
         console.log(data.user.user.applications)
         dispatch(fetchData(data.user.user.applications))
    }   
}

const fetchData=(applications)=>({
    type:'FETCH_DATA',
    applications
})