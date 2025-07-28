import axios from "axios";
import { useState } from "react";
import './Findall.css'; 

export function Findall(){
const[employees,setEmployees] = useState([]);

    async function findallHandler(e)
    {
        e.preventDefault();
        try{
            const response = await axios.get('https://anish-employee.onrender.com1/api/employees');
            setEmployees( response.data);
        }
        catch(err){
            alert("Error fetching employees");
            console.error(err);
        }
    }
    
    return(
        <div className="findall-btn" >
            <h2>Employee Records</h2>
            <form onSubmit={findallHandler}>
            <button type="submit">Get All Records</button>
            </form>
            <div>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </thead>
                    <tbody>
                        {
                            employees.length > 0 ?(
                                employees.map(emp =>(
                                    <tr>
                                        <td>{emp._id}</td>
                                        <td>{emp.empNo}</td>
                                        <td>{emp.empName}</td>
                                        <td>{emp.empSal}</td>
                                    </tr>
                                ))
                            ) :<tr><td colspan={'4'}>No Record</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};
