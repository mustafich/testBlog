import React from "react"

const Inputs = ({renderValue,buttonSend}) => {
    return (
        <>
            <div className="form-block">
                    {renderValue("title","title")}
                    {renderValue("body","body")}
                <div className="form-block_button" onClick={() => buttonSend()}>Add post</div>
            </div>
        </>
    )
}

export default Inputs