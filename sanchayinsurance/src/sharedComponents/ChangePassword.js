import React from 'react'
import { useForm } from "react-cool-form";
import './ChangePassword.css'


const ChangePassword = () => {
 

  return (
    <><form>
    <h3>Change Password</h3>
    <div className="mb-3">
      <label>Old Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter Old Password"
      />
    </div>
    <div className="mb-3">
      <label>New Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter New Password"
      />
    </div>
    <div className="mb-3">
      <label>Confirm Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password again"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form></>
  );
}

export default ChangePassword