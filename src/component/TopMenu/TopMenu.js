import React from "react"
import "./css/index.css"
import Timer from "./Timer/Timer";

const TopMenu = () => {
    return (
        <div className="topMenu">
            <div className="container">
                <div className="topMenu-block">
                <div className="topMenu-block_logo">
                    <img src="https://leansquad.com/img/logo.svg" alt=""/>
                </div>
                <div className="topMenu-block_time">
                  <Timer/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu