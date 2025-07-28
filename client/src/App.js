import{NavLink,Route,Routes} from "react-router-dom";
import { Add } from "./components/Add";
import { Findall } from "./components/Findall";
import { Find } from "./components/Find";
import { Delete } from "./components/Delete";
import { Update } from "./components/Update";
// import { Footer } from "./components/Footer";
import './App.css';

function App(){
    return (
        <div className="div1">
            <h1 className="h1">Employee Management Screen</h1>
                <nav>
                <NavLink to={"/"}>Add</NavLink>
                <NavLink to={"/Update"}>Update</NavLink>
                <NavLink to={"/Delete"}>Delete</NavLink>
                <NavLink to={"/Find"}>Find</NavLink>
                <NavLink to={"/Findall"}>Findall</NavLink>
            </nav>
            <hr/>
            <Routes>
                <Route path="/" element={<Add/>}/>
                <Route path="/Update" element={<Update/>}/>
                <Route path="/Delete" element={<Delete/>}/>
                <Route path="/Find" element={<Find/>}/>
                <Route path="/Findall" element={<Findall/>}/>
            </Routes>

            <footer className="footer">
                <p>anishgargg@gmail.com</p>
            </footer>
        </div>
    )
}
export default App;