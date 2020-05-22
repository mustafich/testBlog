import React from "react"
import {connect} from "react-redux";
import {PostIdFetch} from "../../../redux/actions/actionsPostId";
import AddPost from "./AddPost";
import "./css/index.css"
import {withRouter} from "react-router";

class ContainerAddPost extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <>
                <AddPost history={this.props.history} />
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        state: state.post
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        PostIdFetch: (url) => {
            dispatch(PostIdFetch(url))
        }
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(withRouter(ContainerAddPost))