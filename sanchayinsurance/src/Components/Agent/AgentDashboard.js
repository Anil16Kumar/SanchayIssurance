import React, { useEffect, useState } from "react";
import "./Agent.css";
import { useNavigate } from "react-router-dom";

import { getRole } from "../../services/authorization (1)";

import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import AgentProfile from "./AgentProfile";
import MarketingAgent from "./MarketingAgent";



const[agentProfileData,setHandleProfile]=useState({})
const[showChangePassword,setChangePassword]=useState(false)
const[showViewCustomer,setViewCustomer]=useState(false)
const[showViewCommission,setViewCommission]=useState(false)
const[viewCustomerData,setViewCustomerData]=useState({})
const[viewComissionData,setViewComissionData]=useState({})
const[viewMarketing,setViewMarketing]=useState(false)



const handleMarketing = () => {
  setViewMarketing(true);
  setHandleProfile(false);
  setChangePassword(false);
  setViewCustomer(false);
  setViewCommission(false);

}


const handleProfile = async () => {
    
  try {
    let response = await axios.get(`api`);
    setHandleProfile(response.data);
    console.log(response.data);
  } catch (error) {
    alert(error.message);
  }  
  
  setHandleProfile(true);
  setChangePassword(false);
  setViewCustomer(false);
  setViewCommission(false);
  setViewMarketing(false);
  
};


const handleChangePassword=()=>{
  setChangePassword(true);
  setHandleProfile(false);
  setViewCustomer(false);
  setViewCommission(false);
  setViewMarketing(false);

};

const handleViewCustomers=async() =>{
  try {
    let response = await axios.get(`api`);
    setViewCustomerData(response.data);
    console.log(response.data);
  } catch (error) {
    alert(error.message);
  } 
  setViewCustomer(true);
  setHandleProfile(false);
  setChangePassword(false);
  setViewCommission(false);
  setViewMarketing(false);

}

const handleViewCommission=async() =>{
  try {
    let response = await axios.get(`api`);
    setViewComissionData(response.data);
    console.log(response.data);
  } catch (error) {
    alert(error.message);
  } 
  setViewCommission(true);
  setViewCustomer(false);
  setHandleProfile(false);
  setChangePassword(false);
  setViewMarketing(false);

}


const AgentDashboard = () => {
  const navigation = useNavigate();
  let accessid=localStorage.getItem("accessid");
  const authenticateuser = async () => {
    let token = localStorage.getItem("auth");
    if (token == null) {
      navigation("/");
    } else {
      let nrole = await getRole(token);
      console.log(nrole);
      if (nrole !== "ROLE_AGENT") {
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
      <nav className="navbar fixed-top">
        <div className="container">
          <div className="logo">
            <h2
              className="text-light fw-bold mb-4"
              style={{ marginLeft: "150px" }}
            >
              Agent Account
            </h2>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleProfile}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleChangePassword}>
                      Change Password
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Button variant="light" onClick={() => handleNavClick("about")}>
                  Marketing
                </Button>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Insurance
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleViewCustomers}>
                      View customers
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      {" "}
                      insurance Account
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      {" "}
                      View policy payment
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      View policy claim{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleViewCommission}>
                      view commission
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      {" "}
                      view commission withdrawal
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      {" "}
                      withdraw amount
                    </Dropdown.Item>
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
      </nav>

      {agentProfileData && <AgentProfile handleProfile={agentProfileData }/> }
      {showChangePassword && <ChangeAgentPassword/>}
      {showViewCustomer && <AgentProfile handleViewCustomers={showViewCustomer }/> }
      {showViewCommission && <ViewAgentCommission handleViewCustomers={showViewCommission }/> }
      {viewMarketing && <MarketingAgent/>}
    </>
  );
};

export default AgentDashboard;
