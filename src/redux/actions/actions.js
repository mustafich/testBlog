
export function ActionPost(payload) {
    return {
        type: "VIEW_POST",
        payload
    }
}


export function PostFetch(url,method,body) {
    return (dispatch) => {
        try {
           return  fetch( url,{
                method: 'GET',
                body: JSON.stringify(),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return response.json();
            })
                .then(response =>{
                    dispatch(ActionPost(response))
                    return response
                })
                .catch(()=>{

                });

        }
        catch (e) {

        }

    }
}