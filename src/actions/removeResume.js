export default (id) => {
  return (dispatch) => {
    let token = localStorage.token;
    fetch(`http://apptracklite-api.herokuapp.com/resumes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(remove(id));
  };
};

const remove = (id) => ({
  type: 'REMOVE_RESUME',
  id,
});
