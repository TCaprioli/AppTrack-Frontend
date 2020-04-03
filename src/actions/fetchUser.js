
            

export default (user) =>{
    return async (dispatch)=>{
        let resp = await fetch('http://localhost:3000/signup',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
            let data = await resp.json()
            console.log(signupUser(data.user))
            localStorage.setItem("token", data.jwt)
            dispatch(signupUser(data.user))
            
    }
}

const signupUser=(userObj) =>({
    type:'LOG_USER',
    payload:userObj
})