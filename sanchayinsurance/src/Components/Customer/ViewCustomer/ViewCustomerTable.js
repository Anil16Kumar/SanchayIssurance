import React, { useState } from 'react';
import './ViewCustomerTable.css';

const ViewCustomerTable = ({ customerData }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on the search query
  const filteredData = customerData.filter((customer) =>
    Object.values(customer).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
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
    <div className='div-cutomerview'>
      <h2 className='text-center fw-bold'>Customer's Table</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          style={{ maxWidth: '80px', marginTop: '10px' }}
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
      <table className="table table-bordered table-dark">
        <thead className='bg-dark'>
          <tr>
            <th scope="col">customemorid</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">state</th>
            <th scope="col">city</th>
            <th scope="col">pincode</th>
            <th scope="col">mobileno</th>
            <th scope="col">birthdate</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{customer.customerid}</th>
              <td>{customer.firstname}</td>
              <td>{customer.lastname}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.state}</td>
              <td>{customer.city}</td>
              <td>{customer.pincode}</td>
              <td>{customer.mobileno}</td>
              <td>{customer.birthdate}</td>
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

export default ViewCustomerTable;
