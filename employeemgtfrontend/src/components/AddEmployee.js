import React from "react";

const AddEmployee = () =>{
    const submitHandler = (e) => {
        e.preventDefault();
    };

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
                    <input type="text" name="department" placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2" name="description"/>
                </div>
                <button className="ui button" type="submit" onClick={submitHandler}>Add</button>
            </form>
        </div>
    )
};

export default AddEmployee;
