import React, { useEffect, useState } from 'react';
import './Admin.css'; // Import your CSS file
import { useNavigate, useParams } from 'react-router-dom';

import { getRole } from "../../services/authorization (1)";
import { Link } from 'react-router-dom';
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import AdminHome from './AdminHome';
import AgentRegister from '../Agent/AgentRegister';

const AdminDashboard = () => {
  const { accessid } = useParams();

  const [showHomepage, setShowHomePage] = useState(true);
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [showViewAgent, setShowViewAgent] = useState(false);
  const [viewAgentData,setViewAgentData]=useState([])

  const handleAddAgent = () => {setShowAddAgent(true);setShowHomePage(false);setShowViewAgent(false)};
  const handleViewAgent =() => {setShowViewAgent(true);setShowAddAgent(false);setShowHomePage(false);};
  


  const navigation = useNavigate();

  const authenticateuser = async () => {
    let token = localStorage.getItem("auth");
    if (token == null) {
      navigation("/");
    } else {
      let nrole = await getRole(token);
      console.log(nrole);
      if (nrole !== "ROLE_ADMIN") {
        localStorage.clear();
        navigation("/");
      }
    }
  };

  useEffect(() => {
    authenticateuser();
  }, []);

  const [planData, setPlanData] = useState("");
  const [planName, setPlanName] = useState("");

  let handplannameset = (e) => {
    // setSelectedPlan(e);
  };

  let plans = async () => {
    let res = await axios.get(`http://localhost:8080/planapp/getall`);
    setPlanData(res.data);
    console.log(res.data);
  };

  let planNames;
  if (planData) {
    planNames = planData.map((bt) => {
      return (
        <Dropdown.Item
          href="#"
          value={bt.planname}
          onClick={() => {
            handleNavClick("plan");
            handplannameset(bt.planname);
          }}
          style={{ whiteSpace: "normal" }}
        >
          {bt.planname !== null ? bt.planname : "select plan name"}
        </Dropdown.Item>
      );
    });
  }

  useEffect(() => {
    plans();
  }, []);

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
         <nev className="navbar fixed-top">
         <div className="container">

         <div className="logo">
          <Link to={'/Admindashboard/${accessid}'}><h2 className="text-light fw-bold mb-4">Dashboard</h2></Link>
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
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} onClick={handleAddAgent}>Add Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} onClick={handleViewAgent}>View Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} >View Commission</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Commission Withdrawal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </li>

              <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Insurance
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Customer</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Insurance Account</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Policy Payment</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Policy Claim</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </li>

              <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Queries
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Feedback</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
              </li>


              <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Insurance Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> Add Insurance Type</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Insurance Type</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Add Insurance Scheme</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Insurance Scheme</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Add Insurance Plan</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Insurance Plan</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
              </li>


              <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Settings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Tax Settings</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Insurance Setting</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Add City</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View City</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}> Add State</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View State</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
              </li>


              <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Profile</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Change Password</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>Add Employee</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View Employee</Dropdown.Item>  
                </Dropdown.Menu>
              </Dropdown>
              </li>

              <li>
              <Button
                variant="light"
                onClick={() => {localStorage.clear();navigation('/login');}}
              >
                Logout
              </Button>
            </li>
          </ul>
          </div>
          </div>
         </nev>

         {showHomepage && <AdminHome/>}
         {showAddAgent && <AgentRegister/>}
         {/* {showViewAgent && <AdminGeneralTable/>} */}
     </>
  );
};

export default AdminDashboard;