import React from 'react';
import './ViewAgentTable.css';

const ViewAgentTable = ({ agentData }) => {
  console.log("agent table");

  // Ensure agentData exists and is an array
  if (!agentData || !Array.isArray(agentData) || agentData.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className='div-agent'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {agentData.map((agent, index) => (
            <tr key={index}>
              <th scope="row">{agent.agentid}</th>
              <td>{agent.firstname}</td>
              <td>{agent.lastname}</td>
              <td>{agent.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAgentTable;
