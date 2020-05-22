

export function DeletePostId(url,method="DELETE") {
debugger
    fetch( url,{
        method: method,
        body: JSON.stringify(),
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