import React from "react"
import {connect} from "react-redux";
import {PostIdFetch} from "../../../redux/actions/actionsPostId";
import PostId from "./PostId";
import Loading from "../../loading/loading";
import {DeletePostId} from "../../../redux/actions/actionsDelete";
import {withRouter} from "react-router";
class ContainerPostId extends React.Component {
    componentDidMount() {
        this.props.PostIdFetch(`https://simpleblogapi.herokuapp.com${this.props.url}`)
    }

    render() {

        return (
            <>
                {this.props.state.post.length===0?<Loading/>:<PostId comments={this.props.comments} history={this.props.history} DeletePostId={DeletePostId} post={this.props.state.post}/>}
            </>
        )
    }

}


const mapStateToProps = (state) => {
    debugger
    return {
        state: state.post,
        comments:state.message.message
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        PostIdFetch: (url) => {
            dispatch(PostIdFetch(url))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(ContainerPostId))