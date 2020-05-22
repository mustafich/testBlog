import React from "react"


const addPost = ({history}) => {
    return (
        <div onClick={()=>{
            history.push("/addPost")
        }} className="addPost">
            <p>Добавить пост</p>
        </div>
    )
}

export default addPost