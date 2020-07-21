const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default (payload) => {
  return async (dispatch) => {
    let token = localStorage.token;
    let base = await toBase64(payload.files);

    let resp = await fetch('https://apptracklite-api.herokuapp.com/resumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id: payload.id, document: base }),
    });
    let data = await resp.json();
    console.log(data);

    dispatch(addData(data));
  };
};

const addData = (payload) => ({
  type: 'ADD_RESUME',
  payload,
});
