import axios from "axios";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const divstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [data, setdata] = useState([]);
  let[cid,setcid]=useState();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };


  let navigate=useNavigate()


  const hasclicked = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    let res=await axios.post("http://localhost:8080/userinfoapp/login",{
      username:email,
      password
    })
    console.log(res.data.customerid);
    setcid(res.data.customerid);
    let rolename=res.data.rolename;
    if(rolename==="ROLE_CUSTOMER"){
      navigate(`/CustomerDashboard`)
      return
    }
    else if(rolename==="ROLE_EMPLOYEE"){
      navigate(`/EmployeeDashboard`)
      return
    }
    else if(rolename==="ROLE_AGENT"){
      navigate(`/AgentDashboard`)
      return
    }
    else
    // navigate("/admindashboard")
    navigate(`/AdminDashboard`)
    // console.log(res);
    // console.log(res);
    localStorage.setItem("auth",res.data.accessToken)
    
    return 
  };

  return (
    <>
      <div style={divstyle}>
        <form className="form-main">
        <h3 className="text-center">Sign In</h3>
          <div classNameName="mb-3">
            <label for="exampleInputEmail1" classNameName="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={validateEmail}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={validatePassword}
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>   
          <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={hasclicked}
          >
            Submit
          </button>
          </div>
          <div className="text-center mt-2">
          <p className="forgot-password">
           <a href="#" className="text-danger">Forgot password?</a>
        </p>
          </div>
          
        </form>


        
      </div>
      
    </>
  );
};

export default Login;
