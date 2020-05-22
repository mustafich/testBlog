import React from "react"
import {connect} from "react-redux";
import {PostFetch} from "../../../redux/actions/actions";
import {PostMessage} from "../../../redux/actions/actionsMessage";

import Posts from "./Posts";
import Loading from "../../loading/loading";
import "./css/index.css"
 class ContainerPosts extends React.Component{
    componentDidMount() {
        this.props.PostFetch("https://simpleblogapi.herokuapp.com/posts")
        this.props.PostMessage("https://simpleblogapi.herokuapp.com/comments")

    }
    render() {
        return (
            <div className="post">
                {this.props.state.posts.length===0?<Loading/>:<Posts  posts={this.props.state.posts}/>}
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        state: state.posts,

    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        PostFetch: (url) => {
            dispatch(PostFetch(url))
        },
        PostMessage: (url) => {
            dispatch(PostMessage(url))
        },
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(ContainerPosts)