import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {addEmployee} from "../redux/actions";

const AddEmployee = () =>{
    const dispatch = useDispatch();
    const history = useHistory();

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[department, setDepartment] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const departmentHandler = (e) => {
        setDepartment(e.target.value);
    };

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addEmployee(name, email,department,title,description))
        history.push("/");
    };

    return(
        <div className="ui container">
            <form className="ui form big" onSubmit={submitHandler}>
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" value={name}  onChange={nameHandler} placeholder="John Smith"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={emailHandler} placeholder="johnsmith@gmail.com"/>
                </div>
                <div className="field">
                    <label>Department</label>
                    <input type="text" value={department} onChange={departmentHandler} placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler} placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2" value={description} onChange={descriptionHandler} />
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
        </div>
    )
};

export default AddEmployee;
