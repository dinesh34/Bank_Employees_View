import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Employees = (props)=>{

    const [requestData, setData] = useState([""]);

    useEffect(() => {
        const url_employees = "http://localhost:3000/employees/all";
        axios.get(url_employees)
        .then(emp =>{
            const empData = emp.data;
            setData(empData);
        }).catch(err=>{
            console.log("Error", err);
        })
    });

    return(
        <div>
            <div className="emp_details">
                {requestData.map(user => 
                    <div key={user} >
                        <div>{user.emp_name}</div>
                        <div>{user.emp_address}</div>
                        <div>{user.emp_email}</div>
                        <div>{user.emp_photo}</div>
                        <div>{user.bank_id}</div>
                        <div>{user.branch_id}</div>
                        <br/>
                    </div>)}
            </div>
        </div>
    );

}

export default Employees;