export default (id) => {
  return async (dispatch) => {
    let token = localStorage.token;
    let resp = await fetch(
      `http://apptracklite-api.herokuapp.com/applications/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = await resp.json();
    console.log(data.applications);
    dispatch(remove(id));
    dispatch(itemRemove(data.applications));
  };
};

const remove = (id) => ({
  type: 'REMOVE_CARD',
  id,
});

const itemRemove = (payload) => ({
  type: 'DELETE_APP',
  payload,
});
