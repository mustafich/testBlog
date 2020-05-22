

export function PostAddPost(url,method="GET",body) {

            fetch( url,{
                method: method,
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