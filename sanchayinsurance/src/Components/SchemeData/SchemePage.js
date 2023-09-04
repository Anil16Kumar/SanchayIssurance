import React, { useState } from "react";
import "./SchemePage.css";

const SchemePage = ({ data }) => {
  if (data != null) {
    return (
      <div className="container">
        <div className="plantable">
          <div className="description text-dark fw-bold text-center mt-4">
            {data.description}
          </div>
          <div className="Plan-detail">
            <h3 className="mb-5 text-dark text-center">Plans Details</h3>
            <table class="table table-striped table-dark">
              <thead class="thead-dark"></thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SchemePage;
