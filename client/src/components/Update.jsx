import axios from "axios";
import { useState } from "react"
import '../components/Update.css';
export function Update(){

    const[id,setId]     = useState("");
    const[empNo,setNo]     = useState("");
    const[empName,setName] = useState("");
    const[empSal,setSal]   = useState("");
    
    async function updateHandler(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.put(`https://anish-employee.onrender.com/api/employees/${id}`, { empNo: Number(empNo),empName, empSal: Number(empSal) });
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }

    return(
        <div className="container-update">
            <h2>Update Record Screen</h2>
            <hr/>
            <form onSubmit={updateHandler}>
                <input type="text" placeholder="Enter Id"   value={id}      onChange={e => setId(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="Enter No"   value={empNo}   onChange={e => setNo(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="Enter Name" value={empName} onChange={e => setName(e.target.value)} required/><br/><br/>
                <input type="text" placeholder="Enter Sal"  value={empSal}  onChange={e => setSal(e.target.value)}  required/><br/><br/>
                <button type="submit">Update Record</button>

            </form>
        </div>
    )
}
