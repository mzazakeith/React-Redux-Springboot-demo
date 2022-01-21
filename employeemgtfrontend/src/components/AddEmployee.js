import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const AddEmployee = () =>{
    const dispatch = useDispatch();
    const history = useHistory();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(AddEmployee())
        history.push("/");
    };

    return(
        <div className="ui container">
            <form className="ui form big" onSubmit={submitHandler}>
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" name="name"  placeholder="John Smith"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="johnsmith@gmail.com"/>
                </div>
                <div className="field">
                    <label>Department</label>
                    <input type="text" name="department"  placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2" name="description" />
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
        </div>
    )
};

export default AddEmployee;
