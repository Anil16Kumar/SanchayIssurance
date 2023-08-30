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


  let navigate=useNavigate()


  const hasclicked = async (e) => {
    e.preventDefault();
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
        <form>
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
            />
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
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={hasclicked}
          >
            Submit
          </button>
        </form>
      </div>
      
    </>
  );
};

export default Login;
