import React, { useState } from 'react';
import './ChangePassword.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const ChangePassword = ({ user }) => {

  let accessid=localStorage.getItem("accessid");
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation errors when input changes
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Call an API to change the password (you can replace this with your actual API call)
    try {
      let response=await axios.post(`http://localhost:8080/customerapp/changepassword/${accessid}/${formData.oldPassword}/${formData.newPassword}`)
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      Swal.fire(
        'Done',
        response.data,
        'Success'
      )
    }
    catch (error) {
      console.error('Error changing password:', error);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.oldPassword) {
      errors.oldPassword = 'Old password is required.';
    }
    if (!data.newPassword) {
      errors.newPassword = 'New password is required.';
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required.';
    }
    if (data.newPassword !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }
    return errors;
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
          />
          {errors.oldPassword && <p className="error">{errors.oldPassword}</p>}
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" className='mt-3'>Change Password</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default ChangePassword;
