
            

export default (user) =>{
    return async (dispatch)=>{
        let resp = await fetch('http://localhost:3000/login',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
            let data = await resp.json()
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
            
    }
}

const loginUser=(userObj) =>({
    type:'LOG_USER',
    payload:userObj
})