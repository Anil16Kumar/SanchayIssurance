
import React, { useEffect } from 'react';
import './Agent.css'; 
import { useNavigate } from 'react-router-dom';
import { getRole } from '../../services/authorization (1)';


const AgentDashboard = () => {

  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let token=localStorage.getItem("auth");
    if(token==null){
      navigation("/");
    }
    else{
      let nrole= await getRole(token);
      console.log(nrole);
      if(nrole!=='ROLE_AGENT'){
        localStorage.clear();
        navigation("/");
      }
      
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])

  return (
    <div className="customer-dashboard">
      <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item">Agent Account  </li>
          
          <li className="nav-item">
          Account &#9662;
            <ul className="dropdown-menu">
              <li>profile</li> 
              <li>Change Password</li>
            </ul>
          </li>
          <li className="nav-item"> Marketing  </li>
         
          <li className="nav-item">
            Insurance &#9662;
            <ul className="dropdown-menu">
              <li> View customers</li>
              <li>  insurance Account</li>
              <li>View policy payment</li>
              <li>View policy claim</li> 
            </ul>
          </li>
           
          <li className="nav-item">
          Account &#9662;
            <ul className="dropdown-menu">
              <li> view commission </li>
              <li>view commission withdrawal</li>
              <li>withdraw amount</li>
            </ul>
          </li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default AgentDashboard;