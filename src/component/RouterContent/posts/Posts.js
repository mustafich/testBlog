import React from "react"
import {Route} from "react-router-dom";
import ContainerAddPost from "../addPost/ContainerAddPost";


const Posts = ({posts,comments}) => {
    const VeiwPost = posts.map(item=>{
        return (
            <Route render={({history}) => (
                <div  key={item.id} className="post-block"  onClick={() => {
                    history.push(`/posts/${item.id}`)
                }}>
                    <div className="post-block_title">
                        <p>{item.title}</p>
                    </div>
                    <div className="post-block_body">
                        <p>{item.body}</p>
                    </div>
                </div>
            )}/>

        )
    })
    return (
        <>
            {VeiwPost}
            <ContainerAddPost/>
        </>
    )
}

export default Posts

