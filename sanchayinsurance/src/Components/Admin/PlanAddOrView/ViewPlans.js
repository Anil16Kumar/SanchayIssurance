import React, { useState, useEffect } from 'react';

import './ViewPlans.css'

const ViewPlans = ({ planData }) => {
    console.log(planData);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter planData based on the search query
  const filteredData = planData.filter((plan) =>
    plan.planname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination variables
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentData = filteredData.slice(startIndex, endIndex);

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
    <div className='div-view-plans'>
      <h2 className='text-center fw-bold'>View Plans</h2>

      {/* Search Filter */}
      <div>
        <input
          type="text"
          placeholder="Search Plan Name"
          value={searchQuery}
          style={{ maxWidth: '150px', marginTop: '10px' }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Page Size Dropdown */}
      <div>
        <label htmlFor="pageSize">Page Size:  </label>
        <select
          id="pageSize"
          style={{ maxWidth: '130px', marginTop: '10px' ,marginLeft:'20px'}}
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Plan ID</th>
            <th>Plan Name</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((plan, index) => (
            <tr key={index}>
              <td>{plan.planid}</td>
              <td>{plan.planname}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ maxWidth: '100px', marginTop: '10px' }}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ maxWidth: '100px', marginTop: '10px' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPlans;
