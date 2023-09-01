

import React from 'react';
import './Employee.css'; // Import your CSS file

const EmployeeDashboard = () => {
  return (
    <div className="customer-dashboard">
      <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item">Dashboard  </li>
          
          <li className="nav-item">
          Agent &#9662;
            <ul className="dropdown-menu">
              <li> Add Agent</li> 
              <li>View Agent</li>
              <li>View commission</li>
              <li>View commission withdrawal  </li>
            </ul>
          </li>


          <li className="nav-item">
          Insurance &#9662;
            <ul className="dropdown-menu">
              <li>  View customer</li> 
              <li> insurance account</li>
              <li>View policy payment</li>
              <li>View policy claim </li>
            </ul>
          </li>
           
          
           
          <li className="nav-item">
          Account &#9662;
            <ul className="dropdown-menu">
              <li> profile </li>
              <li>change password</li> 
            </ul>
          </li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default EmployeeDashboard;