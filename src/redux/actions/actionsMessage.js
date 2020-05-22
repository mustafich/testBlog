export function ActionMessage(payload) {
    debugger
    return {
        type: "VIEW_MESSAGE",
        payload
    }
}

export function PostMessage(url,method="GET",body) {
    debugger
    return (dispatch) => {
        try {
            return  fetch( url,{
                method: method,
                body: JSON.stringify(),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return response.json();
            })
                .then(response =>{
                    dispatch(ActionMessage(response))
                    return response
                })
                .catch(()=>{

                });

        }
        catch (e) {

        }

    }
}