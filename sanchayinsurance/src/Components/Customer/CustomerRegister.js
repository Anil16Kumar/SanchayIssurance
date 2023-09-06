import React, { useState } from 'react'
import './CustomerRegister.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';


const CustomerRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [nominee, setNominee] = useState('');
  const [nomineeRelation, setNomineeRelation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const[formData, setFormData]=useState('');
  const [show, setShow] = useState(true);

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'first Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!userName) newErrors.userName = 'userName is required';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!address) newErrors.address = 'Address is required';
    if (!city) newErrors.city = 'city is required';
    if (!state) newErrors.state = 'State is required';
    if (!pincode) newErrors.pincode = 'Pincode is required';
    if (!mobileNo) newErrors.mobileNo = 'Mobile Number is required';
    if (mobileNo.length<10) newErrors.mobileNo="Mobile Number must be 10 digit"
    if (!birthdate) newErrors.birthdate = 'Birthdate is required';
    if (!nominee) newErrors.nominee = 'Nominee is required';
    if (!nomineeRelation) newErrors.nomineeRelation = 'Nominee Relation is required';
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
      let res = await axios.post(
        `http://localhost:8080/customerapp/register`,
        {
          firstname:firstName,
          lastname:lastName,
          email:email,
          address:address,
          state:state,
          city:city,
          pincode:pincode,
          mobileno:mobileNo,
          birthdate:birthdate,
          nominee:nominee,
          nomineerelation:nomineeRelation,
          userInfo:{
              username:userName,
              password:password
          }
        }
      );
      alert(res.data)
      
      

      console.log(res)
    }
    
  };

  return (
    <div className="registration-form-container align-center mx-2 my-2" >
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className='text-center fw-bold'>Customer Registration</h2>
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
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <span className="error">{errors.userName}</span>}
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
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>
      <div className="form-group">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {errors.state && <span className="error">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label>Pincode:</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        {errors.pincode && <span className="error">{errors.pincode}</span>}
      </div>
      <div className="form-group">
        <label>Mobile no:</label>
        <input
          type="text"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
      </div>

      <div className="form-group">
        <label>Birthdate:</label>
        <input
          type="text"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
      </div>
      <div className="form-group">
        <label>Nominee:</label>
        <input
          type="text"
          value={nominee}
          onChange={(e) => setNominee(e.target.value)}
        />
        {errors.nominee && <span className="error">{errors.nominee}</span>}
      </div>

      <div className="form-group">
        <label>Nominee Relation:</label>
        <input
          type="text"
          value={nomineeRelation}
          onChange={(e) => setNomineeRelation(e.target.value)}
        />
        {errors.nomineeRelation && <span className="error">{errors.nomineeRelation}</span>}
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

export default CustomerRegister