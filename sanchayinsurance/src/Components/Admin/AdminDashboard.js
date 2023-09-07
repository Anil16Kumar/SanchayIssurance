import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getRole } from "../../services/authorization (1)";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import AdminHome from "./AdminHome";
import AgentRegister from "../Agent/AgentRegister";
import ViewAgentTable from "../Agent/ViewAgentTable/ViewAgentTable";
import { Helmet } from "react-helmet";
import ViewCustomerTable from "../Customer/ViewCustomer/ViewCustomerTable";
import ViewInsurancetable from "./ViewAdminInsurance/ViewInsurancetable";
import { getQueryData } from "../../services/QueryService";
import AdminViewFeedBack from "./ViewQueryFeedBack/AdminViewFeedBack";
import AddPlan from "./PlanAddOrView/AddPlan";
import ViewPlans from "./PlanAddOrView/ViewPlans";
import SchemeForm from "./AddSchemeorView/SchemeForm";
import ViewSchemeTable from "./AddSchemeorView/ViewSchemeTable";
import AddEmployee from "./AddSchemeorView/AddEmployee";
import AddAdmin from "./AddSchemeorView/AddAdmin";
import ViewEmployee from "./AddSchemeorView/ViewEmployee";
import HandleProfile from "./AddSchemeorView/HandleProfile";
import EmployeeRegister from "../Employee/EmployeeRegister";
import AdminRegister from "./AdminRegister";
import ViewAdmin from './AddSchemeorView/ViewAdmin';
import AdminProfile from './AdminProfile';
import ChangeAdminPassword from "./ChangeAdminPassword";


const AdminDashboard = () => {
  
  const accessid = localStorage.getItem("accessid");
  console.log(accessid);

  const [showHomepage, setShowHomePage] = useState(true);
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [showViewAgent, setShowViewAgent] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [viewAgentData, setViewAgentData] = useState([]);
  const [viewInsurancetable, setViewInsurancetable] = useState(false);
  const [agentData, setAgentData] = useState({});
  const [customerData, setCustomerData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insurancetabledata, setinsurancetabledata] = useState({});
  const[Viewqueryfeedback,setQueryFeedBack]=useState(false)
  const[viewschemetable,setViewSchemeTable]=useState(false)
  // const[viewPlanAddModal,setViewPlanAddModal]=useState(false);
  const [feedbackdata, setFeedBackData] = useState([]);
  const [IsPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const[viewPlansForm,setViewPlans]=useState(false);
  const[plansData,setPlansData]=useState({})
  const[addSchemeForm,setAddSchemeForm]=useState(false)
  const[viewSchemeData,setViewSchemeData]=useState({})


  const[viewEmployeeData,setViewEmployeeData]=useState({}) 
  const[viewEmployeeTable,setViewEmployeeTable]=useState(false) 
  const[showAddAdmin,setAddAdmin]=useState(false)
  const[showAddEmployee,setAddEmployee]=useState(false)
  const[showAdminProfile,setAdminProfile]=useState(false)
  const[adminProfileData,setAdminProfileData]=useState({})
  const[showChangePassword,setChangePassword]=useState(false)
  const[viewAdminData,setViewAdminData]=useState({})                                                                                                                  



  const handleChangePassword=()=>{
    setChangePassword(true);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);

  };

  const handleProfile = async () => {
    let adminid=localStorage.getItem("accessid");
    try {
      let response = await axios.get(`http://localhost:8080/adminapp/getadmin/${adminid}`);
      setAdminProfileData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }  
    
    setAdminProfile(true);
    setChangePassword(false); 
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
  };

  const handleAddEmployee = () => {
    setAddEmployee(true);
    setChangePassword(false);
    setAdminProfile(false); 
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
  };
  const handleAddAdmin = () => {
    setAddAdmin(true);
    setChangePassword(true);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false); 
  };

  const handleAddAgent = () => {
    setShowAddAgent(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false); 
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 
  };
  

  const handleViewSchemeTable =async () => {


  try {
    let response = await axios.get(`http://localhost:8080/schemeapp/getall`);
    setViewSchemeData(response.data);
    console.log(response.data);
  } catch (error) {
    alert(error.message);
  }  

 

  setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 
 
  };

  const handleAddSchemeForm = () => {
    setAddSchemeForm(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false); 
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 
  };
  // const handleViewPlanModal = () => {
  //   setViewPlanAddModal(true);
  //   setShowAddAgent(false);
  //   setShowHomePage(false);
  //   setShowViewAgent(false);
  //   setShowCustomers(false);
  //   setViewInsurancetable(false);
  //   setQueryFeedBack(false);
  // };

  const handleViewAgent = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/agentapp/agents`);
      setAgentData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
    setShowViewAgent(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false); 
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 
  };



  const handleViewPlans = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/planapp/getall`);
      setPlansData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
    setViewPlans(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false); 
    setViewEmployeeTable(false);
    setAddAdmin(false);
  };

  //to view employeee
  const handleViewEmployee = async () => {
    try {
      let response = await axios.get(`employee view api`);
      setPlansData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }

    setViewEmployeeData(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 
  };

  const handleViewAdmin = async () => {
    try {
      let response = await axios.get(`employee view api`);
      setPlansData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
    
    setViewAdminData(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);  
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
  };


  const handleViewCustomer = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8080/customerapp/customers`
      );
      setCustomerData(response.data);
    } catch (error) {
      alert(error.message);
    }

    setShowCustomers(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShwowVieAgent(false); 
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 

  };

  const handleviewInsurancetable = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/policyapp/getall`);
      setinsurancetabledata(response.data);
    } catch (error) {
      alert(error.message);
    }

    setViewInsurancetable(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false); 
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 

  };


  const handlqueryfeedback = () => {

    setQueryFeedBack(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false); 
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false);
    setIsPlanModalOpen(false);
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
 

  };

  const fetchQueryData = async () => {
    try {
      const response = await getQueryData();
      // console.log(response);
      setFeedBackData(response);
      // Set the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openModal = () => {
    fetchQueryData(); // Fetch data when the button is clicked
    setIsModalOpen(true); // Open the modal
    setViewPlans(false);
    setAddSchemeForm(false);
    setIsPlanModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const openPlanModal = () => {
    setIsPlanModalOpen(true);
    setChangePassword(false);
    setAdminProfile(false);
    setAddEmployee(false);
    setShowAddAgent(false);
    setShowHomePage(false);
    setShowViewAgent(false);
    setShowCustomers(false);
    setViewInsurancetable(false);
    setQueryFeedBack(false);
    setAddSchemeForm(false);
    setViewSchemeTable(false);
    setViewAdminData(false); 
    setIsModalOpen(false); 
    setViewPlans(false);
    setViewEmployeeTable(false);
    setAddAdmin(false);
  
 
    
 
  };

  const closePlanModal = () => {
    setIsPlanModalOpen(false);
  };


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
      {/* <Helmet>
  <link href="./Admin.css" rel="stylesheet" />
  </Helmet> */}
      <nev className="navbar fixed-top">
        <div className="container">
          <div className="logo">
            <a href="/Admindashboard">
              <h2 className="text-light fw-bold mb-4">Admin Dashboard</h2>
            </a>
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Agent
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={handleAddAgent}
                    >
                      Add Agent
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={handleViewAgent}
                    >
                      View Agent
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Insurance
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={handleViewCustomer}
                    >
                      View Customer
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={handleviewInsurancetable}
                    >
                      Insurance Account
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      View Policy Payment
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}>
                      View Policy Claim
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Queries
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={()=>{
                      handlqueryfeedback();
                      openModal();
                    }}>
                      View Feedback
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Insurance Type
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={openPlanModal}>
                      {" "}
                      Add Insurance Plan
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleViewPlans}>
                      View Insurance Plans
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleAddSchemeForm}>
                      Add Insurance Scheme
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }} onClick={handleViewSchemeTable}>
                      View Insurance Schemes
                    </Dropdown.Item>
                    
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              {/* <li>
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
              </li> */}

              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleProfile}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleChangePassword}>
                      Change Password
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleAddEmployee}>
                      Add Employee
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleViewEmployee}>
                      View Employee
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleAddAdmin}>
                      Add Admin
                    </Dropdown.Item>
                    <Dropdown.Item href="#" style={{ whiteSpace: "normal" }}  onClick={handleViewAdmin}>
                      view Admin
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Button
                  variant="light"
                  onClick={() => {
                    localStorage.clear();
                    navigation("/login");
                  }}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nev>

      {showHomepage && <AdminHome />}
      {showAddAgent && <AgentRegister />}
      {showViewAgent && <ViewAgentTable agentData={agentData} />}
      {showCustomers && <ViewCustomerTable customerData={customerData} />}
      {viewInsurancetable && (<ViewInsurancetable insurancetabledata={insurancetabledata} />)}
      {Viewqueryfeedback && (<AdminViewFeedBack data={feedbackdata} 
      closeModal={closeModal} setQueryFeedBack={setQueryFeedBack}/>)}


      {IsPlanModalOpen &&  <AddPlan onClose={closePlanModal}/>}

      {viewPlansForm && <ViewPlans planData={plansData} />}
      {addSchemeForm && <SchemeForm/>}
      {viewschemetable && <ViewSchemeTable schemeData={viewSchemeData}/>}
      {showAddEmployee &&  <EmployeeRegister/> }
      {showAddAdmin && <AdminRegister/> }
      {viewEmployeeTable && <ViewEmployee employees={viewEmployeeData}/>}
      {showAdminProfile && <AdminProfile data={adminProfileData }/>}
      {showChangePassword && <ChangeAdminPassword/>}
      {showAddAdmin && <ViewAdmin/>}
    </>
  );
};

export default AdminDashboard;
