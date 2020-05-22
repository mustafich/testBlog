import React from "react"


const PostId = ({post, DeletePostId, history, comments}) => {
    debugger
    const veiwCommets = comments.map(item => {
        if(post.id===item.postId) {
            return (
                <div key={item.id} className="PostComments">
                    <p>{item.body}</p>
                </div>
            )
        }

    })
    return (
        <>
            <div key={post.id} className="post-block">
                <div className="post-block_title">
                    <p>{post.title}</p>
                </div>
                <div className="post-block_body">
                    <p>{post.body}</p>
                </div>
                <div onClick={() => {
                    DeletePostId(`https://simpleblogapi.herokuapp.com/posts/${post.id}`)
                    history.push("/posts")
                }
                } className="post-block_close">
                    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                </div>
                <div onClick={() => history.push("/editPost")} className="post-block_edit">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
            </div>
            <h2>Comments</h2>
            {veiwCommets}
            <div onClick={()=>history.push(`/posts/${post.id}/addComments`)} className="addComments">Add Comments</div>
        </>
    )
}

export default PostId

