import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewAgentTable({ data }) {
    if (!data || data.length === 0) {
      return <p>No data available.</p>;
    }
  
    const headers = Object.keys(data[0]);
  
    return (
      <div className="container mt-4">
        <h2>Agent Table</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ViewAgentTable;
  