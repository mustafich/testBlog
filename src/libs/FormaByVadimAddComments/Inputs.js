import React from "react"

const Inputs = ({renderValue,buttonSend}) => {
    return (
        <>
            <div className="form-block">
                    {renderValue("body","body")}
                <div className="form-block_button" onClick={() => buttonSend()}>Add Comments</div>
            </div>
        </>
    )
}

export default Inputs