import React, { useState, useEffect } from 'react';

const ViewInsurancetable = ({ insurancetabledata }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(insurancetabledata);

  useEffect(() => {
    // Update filteredData whenever insurancetabledata changes or searchQuery changes
    if (!searchQuery) {
      // If searchQuery is empty, show all data without filtering
      setFilteredData(insurancetabledata);
    } else {
      // Filter the data based on searchQuery
      const filtered = insurancetabledata.filter((rowData) =>
        Object.values(rowData).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  }, [insurancetabledata, searchQuery]);

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
      <table className="table">
        <thead>
          <tr>
            <th>policynumber</th>
            <th>issuedate</th>
            <th>maturitydate</th>
            <th>premiumtype</th>
            <th>premiumamount</th>
            <th>numberofinstallment</th>
            <th>status</th>
            <th>nominees</th>
            <th>agent</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.policynumber}</td>
              <td>{rowData.issuedate}</td>
              <td>{rowData.maturitydate}</td>
              <td>{rowData.premiumtype}</td>
              <td>{rowData.premiumamount}</td>
              <td>{rowData.numberofinstallment}</td>
              <td>{rowData.status}</td>
              <td>{rowData.nominees}</td>
              <td>{rowData.agent}</td>
              {/* Map more columns here */}
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

export default ViewInsurancetable;
