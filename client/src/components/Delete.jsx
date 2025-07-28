import axios from "axios";
import { useState } from "react"
import '../components/Delete.css';

export function Delete(){
    const[id,setId]=useState("");
    
    async function deleteData(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.delete(`https://anish-employee.onrender.com/api/employees/${id}`);
alert(response.data.message);
        }
        catch(err)
        {
            alert("Record Not Found : " + err);

        }
    };
    return(
        <div className="container-delete">
            <h3>Delete Record By ID</h3>
            <hr/>
            <form onSubmit={deleteData}>
            <input  id="box" type="text" placeholder="Enter Id" value={id} onChange={e => setId(e.target.value)} required/>
            <br/><br/>
            <button type="submit">Remove Data</button>
            </form>
        </div>
    )
}
