import React from 'react'
import  {Route} from "react-router-dom";

import ContainerPosts from "../RouterContent/posts/ContainerPosts";
import ContainerPostId from "../RouterContent/postId/ContainerPostId";
import AddPostInput from "../RouterContent/addPostInput/addPostInput";
import EditPostInput from "../RouterContent/editPost/EditPostInput";
import AddComments from "../RouterContent/addComments/addComments";


const Router = ()=>{

    return (
        <>
            <Route exact path="/" render={()=>{
                return (
                    <h4>Home</h4>
                )
            }} />
            <Route exact path="/posts" render={()=>{
                return <ContainerPosts/>
            }} />
            <Route exact path={`/posts/:id`} render={({history})=>{

                return <ContainerPostId url={history.location.pathname} />
            }} />
            <Route exact path="/addPost" render={()=>{
                return <AddPostInput/>
            }} />
            <Route exact path="/editPost" render={()=>{
                return <EditPostInput/>
            }} />
            <Route exact path={`/posts/:id/addComments`} render={({history})=>{
                return <AddComments url={history.location.pathname}  />
            }} />
        </>
    )
}
export default Router