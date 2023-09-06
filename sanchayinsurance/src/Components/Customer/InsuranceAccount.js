import React, { useEffect, useState } from 'react';
import { getPolicyOfCustomer } from '../../services/SchemesService';
import SharedTable from '../../sharedComponents/SharedTable';

const InsuranceAccount = ({ accessid }) => {
  const [policydata, setPolicyData] = useState([]);
  const [showpremium, setPremiumButton] = useState(true);
  const [policyfetch, setPolicyFetch] = useState(1);

  useEffect(() => {
    if (policydata.status === 'VERIFIED') {
      setPremiumButton(true);
    }
  }, [policydata]);

  const fetchdata = async () => {
    try {
      let response = await getPolicyOfCustomer(accessid);
      setPolicyData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    'policynumber',
    'issuedate',
    'maturitydate',
    'premiumtype',
    'premiumamount',
    'status',
    'Actions', // Added a new column for actions
  ];

  useEffect(() => {
    fetchdata();
  }, [policyfetch]);

  const handleViewPolicy = () => {
    // Add your logic to handle the "View Policy" button click event.
    // You can navigate to a new page or show a modal to display the policy details.
    // console.log(`View Policy clicked for policyId: ${policyId}`);
    // console.log("policy clicked");
  };

  // Pagination
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on the search query
  const filteredData = policydata.filter((policy) =>
    Object.values(policy).some((value) =>
      value !== null && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
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
    <>
      <div className="policy-div">
        <h1>All Policies will be here</h1>
        {policydata && (
          <>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                style={{ maxWidth: '200px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="form-group">
              {/* Page size dropdown */}
              <select
                className="form-control"
                value={pageSize}
                onChange={handlePageSizeChange}
                style={{ maxWidth: '120px' }}
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={30}>30 per page</option>
              </select>
            </div>
            <SharedTable
              setPolicyFetch={setPolicyFetch}
              data={currentData}
              columns={columns}
              setPremiumButton={setPremiumButton}
              viewpremiumbutton={showpremium}
              // Render the "View Policy" button in each row
              customRender={(rowData) => (
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewPolicy()}
                >
                  View Policy
                </button>
              )}
            />
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Pagination buttons */}
              <button
                className="btn btn-primary btn-sm"
                style={{ maxWidth: '80px', marginTop: '10px' }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                style={{ maxWidth: '80px', marginTop: '10px' }}
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
          </>
        )}
      </div>
    </>
  );
};

export default InsuranceAccount;
