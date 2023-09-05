import React from 'react'
import './AdminHome.css'

function AdminHome() {
    return (
      <div className="admin-container">
        {/* Navbar */}
        <nav className="navbar">
          <h1>Admin Dashboard</h1>
          <ul className="nav-links">
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </nav>
  
        {/* Content */}
        <div className="content">
          <h2 >Welcome to the Admin Dashboard</h2>
  
          {/* Cards */}
          <div className="cards-container">
            <div className="card">
              <h3>Total Users</h3>
              <p>1000</p>
            </div>
            <div className="card">
              <h3>Active Users</h3>
              <p>800</p>
            </div>
            <div className="card">
              <h3>Inactive Users</h3>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default AdminHome