import React, { useState, useEffect } from "react";
import './ViewSchemeTable.css'


const ViewSchemeTable = ({ schemeData }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSchemeData, setFilteredSchemeData] = useState(schemeData);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredSchemeData(schemeData);
    } else {
      const filteredData = schemeData.filter((scheme) =>
        Object.values(scheme)
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredSchemeData(filteredData);
    }
  }, [schemeData, searchQuery]);

  const totalItems = filteredSchemeData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentData = filteredSchemeData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <h2>Scheme Table</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <select
              className="form-control"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={30}>30 per page</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Scheme ID</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Min Age</th>
              <th scope="col">Max Age</th>
              <th scope="col">Min Amount</th>
              <th scope="col">Max Amount</th>
              <th scope="col">Min Invest Time</th>
              <th scope="col">Max Invest Time</th>
              <th scope="col">Registration Commission</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((scheme, index) => (
              <tr key={index}>
                <td>{scheme.schemeid}</td>
                <td>{scheme.schemename}</td>
                <td>{scheme.minage}</td>
                <td>{scheme.maxage}</td>
                <td>{scheme.minamount}</td>
                <td>{scheme.maxamount}</td>
                <td>{scheme.mininvesttime}</td>
                <td>{scheme.maxinvesttime}</td>
                <td>{scheme.registrationcommission}</td>
                <td>{scheme.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSchemeTable;
