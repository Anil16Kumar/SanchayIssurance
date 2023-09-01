import React, { useState } from "react";
import "./Customer.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import { getRole } from "../../services/authorization (1)";

const CustomerDashboard = () => {
  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let token=localStorage.getItem("auth");
    if(token==null){
      navigation("/");
    }
    else{
      let nrole= await getRole(token);
      console.log(nrole);
      if(nrole!=='ROLE_CUSTOMER'){
        localStorage.clear();
        navigation("/");
      }
      
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])


  const[planData,setPlanData]=useState('');
  const[planName,setPlanName]=useState('');

  let handplannameset=(e)=>{
    // setSelectedPlan(e);
  }

  let plans = async () => {
    let res = await axios.get(
      `http://localhost:8080/planapp/getall`
    );
    setPlanData(res.data);
    console.log(res.data);
  };
  
  let planNames;
  if (planData) {
    planNames = planData.map((bt) => {
      return (
        <Dropdown.Item href="#" value={bt.planname} onClick={()=>{handleNavClick('plan'); handplannameset(bt.planname)}} style={{whiteSpace: 'normal'}}>{bt.planname!==null?bt.planname:"select plan name"}</Dropdown.Item>
      );
    });
  }

  useEffect(()=>{
  plans();  
  },[]);



  const handleNavClick = (component) => {
    // setActiveComponent(component);
  };

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };




  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );




  return (
    <>
      <nav className="navbar fixed-top">
      <div className="container">
        <div className="logo">
          <h2 className="text-light fw-bold mb-4" style={{marginLeft:'150px'}}>Account</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Customer Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Profile</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Document</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Change Password</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Insurance Plans
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {planNames}
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li>
              <Button variant="light" onClick={() => handleNavClick("about")}>
                Insurance Account
              </Button>
            </li>

            <li className="nav-item">
            <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Queries
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Query</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Feed Back</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Button
                variant="light"
                onClick={() => handleNavClick("contactus")}
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default CustomerDashboard;
