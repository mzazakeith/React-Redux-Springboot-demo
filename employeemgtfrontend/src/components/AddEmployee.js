import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const AddEmployee = () =>{
    const dispatch = useDispatch();
    const history = useHistory();

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[department, setDepartment] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");



    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(AddEmployee())
        history.push("/");
    };

    return(
        <div className="ui container">
            <form className="ui form big" onSubmit={submitHandler}>
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" value={name}  onChange={setName} placeholder="John Smith"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={setEmail} placeholder="johnsmith@gmail.com"/>
                </div>
                <div className="field">
                    <label>Department</label>
                    <input type="text" value={department} onChange={setDepartment} placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" value={title} onChange={setTitle} placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2" value={description} onChange={setDescription} />
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
        </div>
    )
};

export default AddEmployee;
