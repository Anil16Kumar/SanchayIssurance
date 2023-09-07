import React, { useState } from 'react'
import './EmployeeRegister.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const EmployeeRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(''); 

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = 'first Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
         
        if (!userName) newErrors.userName = 'userName is required';
        if (!password) newErrors.password = 'Password is required';
        if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
            let response=await axios.post(`http://localhost:8080/employeeapp/register`,
            
            {
              firstname:firstName,
              lastname:lastName,
              email:email,
              userInfo:{
                  username:userName,
                  password:password
              }

             
          }

            )

            Swal.fire(
              '',
              'Registered SUccessfully!',
              ''
            )
          } catch (error) {
            alert(error.message);
          }
        }
    };
    
    return (
        <div className="registration-form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <h2 className='text-center fw-bold'>Employee Registration</h2>

          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
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

export default EmployeeRegister

