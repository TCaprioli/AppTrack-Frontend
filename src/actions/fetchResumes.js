export default () => {
  return async (dispatch) => {
    let token = localStorage.token;
    let resp = await fetch('https://apptracklite-api.herokuapp.com/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await resp.json();
    // console.log(data.user.user.resumes);
    let userResumes = data.user.user.resumes;
    dispatch(getResume(userResumes));

    //  let data = await resp.blob()
    //  const fileURL = window.URL.createObjectURL( data )

    //  dispatch(getResume(fileURL))
  };
};
const getResume = (payload) => ({
  type: 'FETCH_RESUME',
  payload,
});
