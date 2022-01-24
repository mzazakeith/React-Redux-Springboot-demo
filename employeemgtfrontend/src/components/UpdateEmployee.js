import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {updateEmployee} from "../redux/actions";


const UpdateEmployee= () => {
    const dispatch = useDispatch();
    const {employeeId} = useParams();
    const employee = useSelector((state) => state.employee);
    const history = useHistory();
    const[name, setName] = useState(employee.name);
    const[email, setEmail] = useState(employee.email);
    const[department, setDepartment] = useState(employee.department);
    const[title, setTitle] = useState(employee.title);
    const[description, setDescription] = useState(employee.description);

    const nameUHandler = (e) => {
        setName(e.target.value);
    };

    const emailUHandler = (e) => {
        setEmail(e.target.value);
    };

    const departmentUHandler = (e) => {
        setDepartment(e.target.value);
    };

    const titleUHandler = (e) => {
        setTitle(e.target.value);
    };

    const descriptionUHandler = (e) => {
        setDescription(e.target.value);
    };

    const submitUHandler = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(employeeId, name, email,department,title,description))
        history.push(`/employee/${employeeId}`);
    };
    return(
        <div className="ui container">
            <form className="ui form big" onSubmit={submitUHandler}>
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" value={name}  onChange={nameUHandler} placeholder="John Smith"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={emailUHandler} placeholder="johnsmith@gmail.com"/>
                </div>
                <div className="field">
                    <label>Department</label>
                    <input type="text" value={department} onChange={departmentUHandler} placeholder="Finance"/>
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleUHandler} placeholder="Manager"/>
                </div>
                <div className="field">
                    <label>Job Description</label>
                    <textarea rows="2" value={description} onChange={descriptionUHandler} />
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
        </div>
    )
};

export default UpdateEmployee;