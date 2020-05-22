
export function PostMessageAdd(url,body) {
    debugger
    fetch( url,{
                method: "POST",
                body: JSON.stringify({...body}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return response.json();
            })
                .then(response =>{

                    return response
                })
                .catch(()=>{

                });


}