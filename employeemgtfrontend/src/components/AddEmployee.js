import React from "react";

const AddEmployee = () =>{
    return(
        <div className="ui container">
            <form className="ui form big">
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="John Smith"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="johnsmith@gmail.com"/>
                </div>
                <div className="field">
                    <label>Department</label>
                    <input type="text" name="last-name" placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="last-name" placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2"/>
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
        </div>
    )
};

export default AddEmployee;


//     "description