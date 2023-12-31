import React, { useState } from 'react';
import './Employee.css'; // Import your CSS file

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { getRole } from '../../services/authorization (1)';
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import ChangeEmployeePassword from './ChangeEmployeePassword';
import EmployeeProfile from './EmployeeProfile';
import ViewAgentTable from './ViewAgentTable/ViewAgentTable';
import ViewCommissionTable from './ViewCommissionTable/ViewCommissionTable';
import ViewCustomerTable from './ViewCustomerTable/ViewCustomerTable';
import ViewPolicyPaymentTable from './ViewPolicyPaymentTable/ViewPolicyPaymentTable';
import ViewPolicyClaimTable from './ViewPolicyClaimTable/ViewPolicyClaimTable';

// const[employeeProfileData,setHandleProfile]=useState({})
// const[showChangePassword,setChangePassword]=useState(false)  
// const [agentData, setAgentData] = useState({});
// const [commissionData, setCommissionData] = useState({});
// const [customerData, setCustomerData] = useState({});
// const [policyPaymentData, setPolicyPaymentData] = useState({});
// const [policyClaimData, setPolicyClaimData] = useState({});






// const handleViewAgent = async () => {
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setAgentData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);
//   }
//   setAgentData(true);
   
// }

// const handleViewCustomer = async ()=>{
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setCustomerData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);

//     setCustomerData(true);
     
  
//   }


// }

// const handleViewCommission = async () => {
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setCommissionData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);
//   }
//   setCommissionData(true);
   
 
// }
// const handleViewPolicyPayment = async () => {
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setPolicyPaymentData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);
//   }

//   setPolicyPaymentData(true);
   


// }


// const handleViewPolicyClaim = async () => {
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setPolicyClaimData(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);
//   }

//   setPolicyClaimData(true);
 


// }

// const handleProfile = async () => {
//   OffAllModels();
//   try {
//     let response = await axios.get(`api`);
//     setHandleProfile(response.data);
//     console.log(response.data);
//   } catch (error) {
//     alert(error.message);
//   }  
  
//   setHandleProfile(true);
  
    
// };


// const handleChangePassword=()=>{
//   OffAllModels();
//   setChangePassword(true);
   
    
// };



const EmployeeDashboard = () => {
  const [showAddAgent, setShowAddAgent] =useState(false);

  const OffAllModels=()=>{
    // setAgentData(true);
    setShowAddAgent(false);
    // setHandleProfile(false);
    // setChangePassword(false);
    // setCommissionData(false);
    // setCustomerData(false);
    // setPolicyPaymentData(false);
    // setPolicyClaimData(false);
  
  };
  const handleAddAgent = ()=>{
    OffAllModels();
  setShowAddAgent(true);
  
  
  }



  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let token=localStorage.getItem("auth");
    if(token==null){
      navigation("/");
    }
    else{
      let nrole= await getRole(token);
      console.log(nrole);
      if(nrole!=='ROLE_EMPLOYEE'){
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
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} onClick={handleAddAgent}>Add Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}  > 
                View Agent</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}  >
                  View commission</Dropdown.Item>
               {/* <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>View commission</Dropdown.Item>  */}
                </Dropdown.Menu>
              </Dropdown>
            </li>


            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Insurance
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}>
                   View customer</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} >   insurance account</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}} >
                View policy payment</Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}  >   
                View policy claim</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
            </li>


            <li>
              <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}  >
                  profile
                  </Dropdown.Item>
                <Dropdown.Item href="#" style={{whiteSpace: 'normal'}}  >
                  change password
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

      {/* {employeeProfileData && <EmployeeProfile  handleProfile={employeeProfileData }/> }
      {showChangePassword && <ChangeEmployeePassword/>}
      {agentData && <ViewAgentTable  handleViewAgent={agentData}/>}
      {commissionData && <ViewCommissionTable handleViewCommission={commissionData}/>}
      {customerData && <ViewCustomerTable handleViewCustomer={customerData}/>}
      {policyClaimData && <ViewPolicyClaimTable handleViewPolicyClaim={policyClaimData}/>} */}
      {/* {showAddAgent && </>} */}

      

  

     </>
  );
};

export default EmployeeDashboard;