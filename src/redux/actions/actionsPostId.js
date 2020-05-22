
export function ActionPost(payload) {
    return {
        type: "VIEW_POST_ID",
        payload
    }
}


export function PostIdFetch(url,body) {
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