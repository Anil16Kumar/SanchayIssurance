import React, { useState } from "react";
import "./SchemePage.css";
import Calculator from "./Calculator";
import { Button } from "react-bootstrap";
import InsuranceAccountPolicy from "../Payment/InsuranceAccountPolicy";

const SchemePage = ({ data }) => {
    const[showInsurancePolicy,setShowInsurancePolicy]=useState(false)


    const showInsurancePolicyhandle=()=>{
      setShowInsurancePolicy(!showInsurancePolicy)
    } 
    if(!showInsurancePolicy){
      if(!Array.isArray(data)){
        return (
          <div className="container">
            <div className="plantable">
              <div className="description fw-bold text-center mt-3">
                {data.description}
              </div>
              <div className="Plan-detail">
                <h3 className="mb-5 text-center">Plans Details</h3>
                <table class="table table-striped table-dark">
                  <thead class="thead-dark"></thead>
                  {data?(<tbody>
                    <tr>
                      <td className="fw-bold">Policy-term-minimum</td>
                      <td>{data.mininvesttime}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Policy-term-maximum</td>
                      <td>{data.maxinvesttime}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Miniumum Age</td>
                      <td>{data.minage}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Maximum Age</td>
                      <td>{data.maxage}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Minimum investment Amount</td>
                      <td>{data.minamount}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Maximum investment Amount</td>
                      <td>{data.maxamount}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Profite Ratio</td>
                      <td>{data.registrationcommission}</td>
                    </tr>
                  </tbody>):("")}
                </table>
              </div>
            </div>
            <div className="Calculator-div">
              <Calculator minamount={data.minamount} maxamount={data.maxamount} 
              minyear={data.mininvesttime} maxyear={data.maxinvesttime} profitratio={data.registrationcommission} showInsurancePolicyhandle={showInsurancePolicyhandle}/>
            </div>
          </div>
        );
      }
      else{
        return(
          <></>
        )
      }
    }
    else{
      return(
        {showInsurancePolicy} && <InsuranceAccountPolicy data={data}/>
      )
    }

};

export default SchemePage;
