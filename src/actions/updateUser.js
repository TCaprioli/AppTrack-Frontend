export default (payload) => {
  return async (dispatch) => {
    let token = localStorage.token;

    let { name, id } = payload;
    let resp = await fetch(
      `https://apptracklite-api.herokuapp.com/users/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: name }),
      }
    );
    let data = await resp.json();
    // console.log({ data });

    dispatch(updateData(data.user));
  };
};

const updateData = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});
