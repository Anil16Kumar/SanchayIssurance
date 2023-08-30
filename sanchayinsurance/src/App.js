import "./App.css";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import EmployeeDashboard from './Components/Employee/EmployeeDashboard';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import AgentDashboard from './Components/Agent/AgentDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Home from "./Components/home/Home";
import Login from "./Components/login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} > </Route>
        <Route path="/Admindashboard" element={<AdminDashboard/>}> </Route>
        <Route path="/Employeedashbaord" element={<EmployeeDashboard/>}> </Route>
        <Route path="/Customerdashboard" element={<CustomerDashboard/>}> </Route>
        <Route path="/Agentdashboard" element={<AgentDashboard/>}> </Route>
      </Routes>
    </>
    
  );
}

export default App;
