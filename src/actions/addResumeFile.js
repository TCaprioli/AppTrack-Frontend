
   const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default (payload)=>{
    return async (dispatch)=>{
        let token = localStorage.token
        let base = await toBase64(payload)
        
        let resp = await fetch('http://localhost:3000/resumes',{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({document:{url:base}})
        })
         let data = await resp.json()
         console.log(data)
         
        
        // dispatch(addData(data.application))

        
        // let resp = await fetch('http://localhost:3000/resumes',{
        //     method:'GET',
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //       },
        // })
        //  let data = await resp.json()
        //  console.log(data,payload)
    }   
}
