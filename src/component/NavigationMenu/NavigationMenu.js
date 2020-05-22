import React from "react"
import {Link} from "react-router-dom";

import "./css/index.css"

const NavigationMenu = () => {
    return (
        <div className="NavigationMenu">
            <div className="NavigationMenu-user">
                <div className="NavigationMenu-user_box">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2_-pJoosWEoSBTlw3HD9FhLSmORRWADBLfwIwiuUPAtKsnZNLw&s"
                        alt=""/>
                    <div className="NavigationMenu-user_box__settings">
                        <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
                    </div>
                </div>

            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/posts/">Post</Link>
                <Link to="/addPost/">Add post</Link>
                <Link to="/setting/">Setting</Link>
            </ul>


        </div>

    )
}

export default NavigationMenu