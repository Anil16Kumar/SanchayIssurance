import React from 'react';
import './Customer.css'; // Import your CSS file

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard">
      <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item">Account  </li>
          
          <li className="nav-item">
          Customer Profile &#9662;
            <ul className="dropdown-menu">
              <li>profile</li>
              <li>Document</li>
              <li>Change Password</li>
            </ul>
          </li>
          <li className="nav-item">
            Insurance Plans &#9662;
            <ul className="dropdown-menu">
              <li>Protection Plans</li>
              <li>Child Plans</li>
              <li>Saving Plan</li>
              <li>Growth Plans</li>
              <li>Group Plans</li>
            </ul>
          </li>
          <li className="nav-item">Insurance Account</li>
          <li className="nav-item">
            Queries &#9662;
            <ul className="dropdown-menu">
              <li>Enquiry</li>
              <li>View Feedback</li>
            </ul>
          </li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomerDashboard;