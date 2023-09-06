import React, { useState, useEffect } from 'react';
import './ViewAgentTable.css';

const ViewAgentTable = ({ agentData }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAgentData, setFilteredAgentData] = useState(agentData);

  useEffect(() => {
    // Update filteredAgentData whenever agentData changes or searchQuery changes
    if (!searchQuery) {
      // If searchQuery is empty, show all data without filtering
      setFilteredAgentData(agentData);
    } else {
      // Filter the data based on searchQuery
      const filteredData = agentData.filter((agent) =>
        Object.values(agent).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredAgentData(filteredData);
    }
  }, [agentData, searchQuery]);

  // Calculate pagination variables
  const totalItems = filteredAgentData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentData = filteredAgentData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className='div-agentview'>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          style={{ maxWidth: '200px', marginTop: '10px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="form-group">
        {/* Page size dropdown */}
        <select
          className="form-control"
          value={pageSize}
          style={{ maxWidth: '120px', marginTop: '10px' }}
          onChange={handlePageSizeChange}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={30}>30 per page</option>
        </select>
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Agent id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((agent, index) => (
            <tr key={index}>
              <th scope="row">{agent.agentid}</th>
              <td>{agent.firstname}</td>
              <td>{agent.lastname}</td>
              <td>{agent.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Pagination buttons */}
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ maxWidth: '80px', marginTop: '10px' }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary mb-3"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ maxWidth: '80px', marginTop: '10px' }}
        >
          Next
        </button>
      </div>
      <div className="text-center">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default ViewAgentTable;
