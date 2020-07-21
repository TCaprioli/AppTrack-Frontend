export default (payload) => {
  return async (dispatch) => {
    let token = localStorage.token;
    let resp = await fetch('https://apptracklite-api.herokuapp.com/folders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    let data = await resp.json();
    // console.log(data.folder)
    dispatch(addData(data.folder));
  };
};

const addData = (payload) => ({
  type: 'ADD_FOLDER',
  payload,
});
