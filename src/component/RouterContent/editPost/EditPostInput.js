import React from "react"
import {connect} from "react-redux";
import {PostIdFetch} from "../../../redux/actions/actionsPostId";

import {withRouter} from "react-router";
import ContainerInputs from "../../../libs/FormaByVadimEdit/ContainerInputs";
class ContainerPostId extends React.Component {


    render() {

        return (
            <>
                <ContainerInputs title={this.props.title} body={this.props.body} id={this.props.id} />
            </>
        )
    }

}


const mapStateToProps = (state) => {
    debugger
    return {
        title: state.post.post.title,
        body:state.post.post.body,
        id:state.post.post.id
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