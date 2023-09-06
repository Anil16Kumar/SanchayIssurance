import React, { useState } from 'react';

const ModalFeedback = ({ data, closeModal }) => {
  console.log(data);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on the search query
  const filteredData = data.filter((query) =>
    query.title.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Feedback</h5>
          <button type="button" className="close mb-1" onClick={closeModal} style={{maxWidth:'40px'}}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body night-mode">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search query..."
              value={searchQuery}
              style={{maxWidth:'200px'}}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="form-group">
            {/* Smaller page size dropdown */}
            <select
              className="form-control form-control-sm"
              value={pageSize}
              onChange={handlePageSizeChange}
              style={{maxWidth:'120px'}}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={30}>30 per page</option>
            </select>
          </div>
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Query Id</th>
                <th scope="col">Title</th>
                <th scope="col">Query</th>
                <th scope="col">Query Reply</th>
                <th scope="col">Query Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((query, index) => (
                <tr key={index}>
                  <td>{query.queryid}</td>
                  <td>{query.title}</td>
                  <td>{query.messagequery}</td>
                  <td>{query.replyquery}</td>
                  <td>{query.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            {/* Smaller pagination buttons */}
            <button
              className="btn btn-primary btn-sm"
              style={{maxWidth:'80px',marginTop:'10px'}}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              style={{maxWidth:'80px',marginTop:'10px'}}
              className="btn btn-primary btn-sm mb-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <div className="text-center">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFeedback;
