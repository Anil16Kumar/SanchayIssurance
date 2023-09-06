import React, { useState, useEffect } from "react";
import "./ViewAgentTable.css";

const ViewAgentTable = ({ agentData }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAgentData, setFilteredAgentData] = useState(agentData);

  // State to store the selected agent for update
  const [selectedAgent, setSelectedAgent] = useState(null);

  // State to control the delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // State to control the update modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // State to store the updated agent data
  const [updatedAgentData, setUpdatedAgentData] = useState(null);

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

  // Function to open the update modal and set the selected agent
  const handleUpdateClick = (agent) => {
    setSelectedAgent(agent);
    setShowUpdateModal(true);
  };

  // Function to close the update modal
  const handleCloseUpdateModal = () => {
    setSelectedAgent(null);
    setShowUpdateModal(false);
  };

  // Function to handle the update of agent data
  const handleUpdateAgent = () => {
    // Perform the update operation with updatedAgentData
    console.log("Updated Agent Data:", updatedAgentData);
    // Close the update modal
    handleCloseUpdateModal();
  };

  // Function to open the delete confirmation modal
  const handleDeleteClick = (agent) => {
    setSelectedAgent(agent);
    setShowDeleteModal(true);
  };

  // Function to confirm and soft delete an agent
  const handleDeleteAgent = () => {
    // Perform the soft delete operation with selectedAgent
    console.log("Soft Deleted Agent:", selectedAgent);
    // Close the delete confirmation modal
    setShowDeleteModal(false);
    setSelectedAgent(null);
  };

  return (
    <div className="div-agentview">
      {/* ... (existing code) */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Agent id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((agent, index) => (
            <tr key={index}>
              <th scope="row">{agent.agentid}</th>
              <td>{agent.firstname}</td>
              <td>{agent.lastname}</td>
              <td>{agent.email}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  style={{ maxWidth: "80px" }}
                  onClick={() => handleUpdateClick(agent)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  style={{ maxWidth: "80px" }}
                  onClick={() => handleDeleteClick(agent)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="text-center" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ maxWidth: "80px", marginTop: "10px" }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary mb-3"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ maxWidth: "80px", marginTop: "10px" }}
        >
          Next
        </button>
      </div>
      <div className="text-center">Page {currentPage} of {totalPages}</div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Update form goes here */}
            <button onClick={handleCloseUpdateModal}>Close</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this agent?</p>
            <button onClick={handleDeleteAgent}>Yes</button>
            <button onClick={() => setShowDeleteModal(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAgentTable;
