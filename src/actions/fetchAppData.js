export default () => {
  return async (dispatch) => {
    let token = localStorage.token;
    let resp = await fetch('http://apptracklite-api.herokuapp.com/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await resp.json();
    //  console.log(data)
    dispatch(fetchData(data.user.user.applications));
  };
};

const fetchData = (applications) => ({
  type: 'FETCH_DATA',
  applications,
});
