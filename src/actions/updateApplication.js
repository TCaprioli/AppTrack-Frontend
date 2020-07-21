export default (payload) => {
  return async (dispatch) => {
    let token = localStorage.token;

    let { id, title, company, description, applied } = payload;
    let resp = await fetch(
      `http://apptracklite-api.herokuapp.com/applications/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          company: company,
          description: description,
          applied: applied,
        }),
      }
    );
    let data = await resp.json();
    // console.log({ data });

    dispatch(updateData(data.application));
  };
};

const updateData = (payload) => ({
  type: 'UPDATE_DATA',
  payload,
});
