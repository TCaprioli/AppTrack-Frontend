export default () => {
    return async (dispatch) => {
      const token = localStorage.token;
      if (token) {
        let resp = await fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        let data = await resp.json()
        dispatch(loginUser(data.user))
        }
    }
}

const loginUser=(userObj) =>({
    type:'LOG_USER',
    payload:userObj
})


