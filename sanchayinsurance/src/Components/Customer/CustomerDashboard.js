import React, { useState, useEffect } from "react";
import "./Customer.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown, Modal } from "react-bootstrap";
import axios from "axios";
import { getRole } from "../../services/authorization (1)";
import { getCustomerData, updateCustomer } from "../../services/CustomerService";
import CustomerProfile from "./CustomerProfile";
import ChangePassword from "../../sharedComponents/ChangePassword";
import PlanServices from "../../services/PlanServices";
import InsuranceAccount from "./InsuranceAccount";
import Enquiry from "../../sharedComponents/query/Enquiry";
import { getQueryData } from "../../services/QueryService";
import ModalFeedback from "../../sharedComponents/query/ModalFeedback";
import { Helmet } from "react-helmet";

const CustomerDashboard = () => {
  const navigation = useNavigate();
  let accessid = useParams().accessid;
  const [planData, setPlanData] = useState("");
  const [customerData, setCustomerData] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackdata, setFeedBackData] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false); // Define showNavbar state

  const fetchQueryData = async () => {
    try {
      const response = await getQueryData();
      console.log(response);
      setFeedBackData(response);
      // Set the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openModal = () => {
    fetchQueryData(); // Fetch data when the button is clicked
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleUpdateProfile = async (updatedData) => {
    // Simulate an API call to update the profile data
    // Replace this with your actual API call
    // console.log(updatedData);
    let response = await updateCustomer(accessid, updatedData);
    // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

    // Assuming the API call was successful and updatedData is returned
    if (response) {
      setCustomerData(response);
    }
  };

  const authenticateuser = async () => {
    let token = localStorage.getItem("auth");
    if (token == null) {
      navigation("/");
    } else {
      let nrole = await getRole(token);
      console.log(nrole);
      if (nrole !== "ROLE_CUSTOMER") {
        localStorage.clear();
        navigation("/");
      }
    }
  };

  const getCustomer = async () => {
    if (accessid !== undefined) {
      try {
        let response = await getCustomerData(accessid);
        setCustomerData(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    authenticateuser();
  }, []);
  useEffect(() => {
    getCustomer();
  }, []);

  const handleNavLinkClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  let handplannameset = (e) => {
    setSelectedPlan(e);
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
            handplannameset(bt.planname);
            handleNavLinkClick("plancomponent");
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

  const handleNavClick = (component) => {};

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

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Helmet>
        <link href="./Admin.css" rel="stylesheet" />
      </Helmet>
      <div className="moving-line"></div>
      <nav className="navbar fixed-top bg-light">
        <div className="container">
          <div className="logo">
            <h3 className="text-dark fw-bold mb-4">
              Welcome {(customerData.firstname)}
            </h3>
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <div>
                <li className="me-5 fw-bold text-dark" variant="info">
                  DASHBOARD
                </li>
              </div>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="fw-bold"
                  >
                    Customer Profile
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={() => handleNavLinkClick("profilecomponent")}
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={() =>
                        handleNavLinkClick("changepasswordcomponent")
                      }
                    >
                      Change Password
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-plan"
                    className="fw-bold"
                  >
                    Insurance Plans
                  </Dropdown.Toggle>
                  <Dropdown.Menu>{planNames}</Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <button
                  className="bg-light text-dark fw-bold  insurance-nav"
                  onClick={() => handleNavLinkClick("insurancecomponent")}
                >
                  Insurance Account
                </button>
              </li>

              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="fw-bold"
                  >
                    Queries
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={() => {
                        handleNavLinkClick("querycomponent");
                        closeModal();
                      }}
                    >
                      Query
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ whiteSpace: "normal" }}
                      onClick={() => {
                        openModal();
                        handleNavLinkClick("");
                      }}
                    >
                      Feed Back
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
      </nav>
      <div className="div-profile">
        {selectedComponent === "profilecomponent" && (
          <CustomerProfile
            customerData={customerData}
            onUpdateProfile={handleUpdateProfile}
          />
        )}
      </div>
      <div className="div-changepassword">
        {selectedComponent === "changepasswordcomponent" && <ChangePassword />}
      </div>
      <div className="div-plans">
        {selectedComponent === "plancomponent" &&
          selectedPlan && <PlanServices selectedPlan={selectedPlan} accessid={accessid} />}
      </div>
      <div className="div-insuranceAccount">
        {selectedComponent === "insurancecomponent" && <InsuranceAccount accessid={accessid} />}
      </div>
      <div className="div-queries">
        {selectedComponent === "querycomponent" && <Enquiry />}
      </div>
      {isModalOpen && <ModalFeedback data={feedbackdata} closeModal={closeModal} />}
    </>
  );
};

export default CustomerDashboard;
