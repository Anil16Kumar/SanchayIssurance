import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PlanServices.css";
import { getSchemeBySchemeName, getSchemesByPlanname } from "./SchemesService";
import SharedTable from "../sharedComponents/SharedTable";
import { Table } from "react-bootstrap";
import Error from "../sharedComponents/Error";
import SchemePage from "../Components/SchemeData/SchemePage";
const PlanServices = ({ selectedPlan }) => {
  const [planSchemes, setPlanScheme] = useState([]);
  const [Iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [SchemeData, setSchemeData] = useState([]);
  const [schemeError, setSchemeError] = useState(null);

  const handleSelectedScheme = (e) => {
    setSelectedScheme(e.target.value);
  };

  let response;
  const fetchdata = async () => {
    try {
      response = await getSchemesByPlanname(selectedPlan);
      // console.log(response);
      setPlanScheme(response.data);
      // filterdata(response.data)
      setErrorMessage(null);
    } catch (error) {
      // console.log(error);
      setErrorMessage(error.response.data);
    }
  };

  let schemeresponse;
  const fetchscheme = async () => {
    try {
      schemeresponse = await getSchemeBySchemeName(selectedScheme);
      // console.log(schemeresponse.data);
      setSchemeData(schemeresponse.data);
      // filterdata(response.data)
      setSchemeError(null);
    } catch (error) {
      // console.log(error);
      setSchemeError(error.response.data);
    }
  };

  // Fetch Scheme data

  const columns = [
    "schemename",
    "minage",
    "maxage",
    "minamount",
    "maxamount",
    "mininvesttime",
    "maxinvesttime",
    "registrationcommission",
  ];
  const schemeColumns = [
    "description",
    "schemename",
    "minage",
    "maxage",
    "minamount",
    "maxamount",
    "mininvesttime",
    "maxinvesttime",
    "registrationcommission",
  ];
  useEffect(() => {
    fetchdata();
  }, [selectedPlan]);

  useEffect(() => {
    if (selectedScheme == null) {
      return;
    } else {
      console.log(SchemeData);
      // console.log(SchemeData);
      fetchscheme();
    }
  }, [selectedScheme]);

  return (
    <>
      <div className="downpage">
        <div className="PlanSchemepage">
          {errorMessage
            ? errorMessage && <Error msg={errorMessage} />
            : planSchemes && (
                <SharedTable
                  data={planSchemes}
                  columns={columns}
                  buttonstatus={true}
                  handleSelectedScheme={handleSelectedScheme}
                />
              )}
          {/* {planSchemes &&<SharedTable data={planSchemes} columns={columns}/>} */}
        </div>
        <div className="schemepage">
          {schemeError
            ? schemeError && <Error msg={schemeError} />
            : SchemeData && <SchemePage data={SchemeData} />}
        </div>
      </div>
    </>
  );
};

export default PlanServices;
