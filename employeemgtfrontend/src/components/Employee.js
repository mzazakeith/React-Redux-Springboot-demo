import React from "react";
import { useSelector } from "react-redux";

const Employee = () =>{
    const employees = useSelector((state) => state.allEmployees.employees);
    console.log(employees);
    return(
        <div className="ui grid container">
                {employees && employees.map((employee)=>{
                    return(
                        <div className="four wide column" key={employee.id}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src="" alt={employee.name} />
                                        </div>
                                        <div className="content">
                                            <div className="header">{employee.name}</div>
                                            <div className="meta">{employee.title}</div>
                                            <div className="meta">{employee.department}</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Employee;