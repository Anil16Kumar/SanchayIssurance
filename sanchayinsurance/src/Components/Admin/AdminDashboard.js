import React from 'react';
import './Admin.css'; // Import your CSS file

const AdminDashboard = () => {
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
          Queries &#9662;
            <ul className="dropdown-menu">
              <li>View Feedback</li>  
            </ul>
          </li>

          <li className="nav-item">
          Insurance Type &#9662;
            <ul className="dropdown-menu">
              <li>Add Insurance Type</li> 
              <li>View Insurance Type</li>
              <li>Add Insurance Scheme</li>
              <li>View Insurance Scheme</li>
              <li>Add Insurance Plan</li>
              <li>View Insurance Plan</li>
            </ul>
          </li>
           
          
           
          <li className="nav-item">
          Settings &#9662;
            <ul className="dropdown-menu">
              <li>  Tax Settings </li>
              <li> Insurance Setting</li> 
              <li> Add City </li>
              <li>  View City</li> 
              <li>  Add State </li>
              <li> View State</li> 
            </ul>
          </li>


          <li className="nav-item">
          Account &#9662;
            <ul className="dropdown-menu">
              <li>  Profile </li>
              <li> Change Password</li> 
              <li>   Add Employee </li>
              <li>  View City</li> 
              <li>  Add State </li>
              <li>  View Employee</li> 
            </ul>
          </li>
          
          
          <li className="nav-item">Logout</li>

        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;