import React, { useEffect, useState } from 'react'
import './AgentRegister.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { generateUniqueReferenceNumber } from './../../services/AgentService';

const AgentRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [referencenumber, setReferenceNumber] = useState('');
    const[mobilenumber,setMobileNumber]=useState('')

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = 'first Name is required';
        // if(((typeof firstName)!==String)) newErrors.firstName="firstName should be characters";
        // if(((typeof lastName)!==String)) newErrors.lastName="LastName should be characters";
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
        if (!referencenumber) newErrors.referencenumber = 'Reference Number is required';

        if (!userName) newErrors.userName = 'userName is required';
        // if(((typeof userName)!==String)) newErrors.userName="UserName should be characters";
        if (!password) newErrors.password = 'Password is required';
        if(!mobilenumber) newErrors.mobilenumber="Mobile number required";
        if(mobilenumber.length!==10 ) newErrors.mobilenumber="mobile number length should be 10"
        if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };    

    useEffect(() => {
      const uniqueReferenceNumber = generateUniqueReferenceNumber();
      setReferenceNumber(uniqueReferenceNumber);
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;
        try {
          if (validateForm()) {
            response=await axios.post('http://localhost:8080/agentapp/register',{
              firstname:firstName,
              lastname:lastName,
              email:email,
              referencenumber:referencenumber,
              mobilenumber:mobilenumber,
              userInfo:{
                  username:userName,
                  password:password
              }
            })
          }
          Swal.fire(
            'Done',
            response.data,
            'Success'
          )
        }
        catch (error) {
          console.log(error.message);
        }
        
    };
    
    return (
        <div className="registration-form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <h2 className='text-center fw-bold'>Agent Registration</h2>

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
            <label>Mobile Number:</label>
            <input
              type="text"
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {errors.mobilenumber && <span className="error">{errors.mobilenumber}</span>}
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
            <label>Reference Number:</label>
            <input
              type="referencenumber"
              value={referencenumber}
              disabled
              onChange={(e) => setReferenceNumber(e.target.value)}
            />
            {errors.referencenumber && <span className="error">{errors.referencenumber}</span>}
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

export default AgentRegister

