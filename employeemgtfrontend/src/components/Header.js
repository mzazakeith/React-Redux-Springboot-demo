import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="ui grey inverted fixed menu">
            <div className="ui container center">
                <h2>Simple Employee Management System</h2>
            </div>
            <div className="ui right floated">
                <Link to={"/save/employee/"}>
                    <button className="ui positive button">Add Employee</button>
                </Link>
            </div>
            <br/>
        </div>
    )
};

export default Header;