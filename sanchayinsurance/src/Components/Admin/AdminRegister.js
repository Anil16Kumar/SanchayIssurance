import React, { useState } from 'react'
import './AdminRegister.css'
import { Button } from 'react-bootstrap';

const AdminRegister = () => {
  const [adminName, setAdminName] = useState('');

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!adminName) newErrors.adminName = 'Admin Name is required';
    if (!userName) newErrors.userName = 'userName is required';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    


    if (validateForm()) {
      
    }
  };


  return (
    <div className="registration-form-container">
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className='text-center fw-bold'>Admin Registration</h2>

      <div className="form-group">
        <label>Admin Name:</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
        {errors.adminName && <span className="error">{errors.adminName}</span>}
      </div>

      <div className="form-group">
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <span className="error">{errors.userName}</span>}
      </div>
 
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>

      <div className='text-center'>
      <Button type="submit" variant='success'  style={{fontSize:'20px'}}>Register</Button>
      </div>
      
    </form>
  </div>
  )

}

export default AdminRegister

