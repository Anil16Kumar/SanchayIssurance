import React, { Component }  from 'react';
import "./App.css";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import EmployeeDashboard from './Components/Employee/EmployeeDashboard';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import AgentDashboard from './Components/Agent/AgentDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Home from "./Components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/login/login";

function App() {
  return (
    <>
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>} > </Route>
        <Route path="/Admindashboard/" element={<AdminDashboard/>}> </Route>
        <Route path="/Employeedashbaord/:accessid" element={<EmployeeDashboard/>}> </Route>
        <Route path="/Customerdashboard/:accessid" element={<CustomerDashboard/>}> </Route>
        <Route path="/Agentdashboard/:accessid" element={<AgentDashboard/>}> </Route>
      </Routes>
    </>
    
  );
}

export default App;
