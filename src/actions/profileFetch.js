export default () => {
  return async (dispatch) => {
    const token = localStorage.token;
    if (token) {
      let resp = await fetch('https://apptracklite-api.herokuapp.com/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await resp.json();
      dispatch(loginUser(data.user));
    }
  };
};

const loginUser = (userObj) => ({
  type: 'LOG_USER',
  payload: userObj,
});
