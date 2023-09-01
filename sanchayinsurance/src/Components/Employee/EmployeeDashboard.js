import React from 'react';
import './Employee.css'; // Import your CSS file

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthenticateEmployee } from '../../services/Authenticateuser';
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";

const EmployeeDashboard = () => {
  // const navigation = useNavigate();

  // const authenticateuser=async ()=>{
  //   let isEmployee=await AuthenticateEmployee();
  //   if(!isEmployee){
  //     navigation("/")
  //   }
  // }
  // useEffect(()=>{
  //   authenticateuser();
  // },[])


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
          <h2 className="text-light fw-bold mb-4" style={{marginLeft:'150px'}}>Dashboard</h2>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Agent
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Add Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> View Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View commission</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View commission</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
            </li>


            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Insurance
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> View customer</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>   insurance account</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> View policy payment</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>   View policy claim</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
            </li>


            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>profile</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> change password</Dropdown.Item>  </Dropdown.Menu>
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

export default EmployeeDashboard;