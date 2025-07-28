import { useState } from "react";
import './Add.css';
import axios from 'axios';
export function Add(){
    const[empNo,setEmpNo] = useState(" ");
    const[empName,setEmpName] = useState(" ");
    const[empSal,setEmpSal] = useState(" ");

    async function addHandler(e)
    {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/api/employees', {empNo,empName,empSal});
            alert(response.data.message);
            response.data(alert("hello"));
        }
        catch(err){
            alert(err);
        }
    }
    return(
        <div id="div1">
            <h1 className="h1">Add Records</h1><br/><br/>
            <form onSubmit={addHandler}>
            <label for="empNo"><b><u>Enter the EmpNumber:</u></b></label><br/>
            <input type="number" placeholder="empNumber"  onChange={(e)=>setEmpNo(e.target.value)}></input><br/><br/>
            <label for="empName"><b><u>Enter the EmpName:</u></b></label><br/>
            <input type="text" placeholder="empName" onChange={(e)=>setEmpName(e.target.value)}></input><br/><br/>
            <label for="empSal"><b><u>Enter the EmpSalary:</u></b></label><br/>
            <input type="number" placeholder="empSal" onChange={(e)=>setEmpSal(e.target.value)}></input><br/><br/><br/>
            <button className="btn" type="submit" >Add Record</button>
            </form>
        </div>
    )
};