import React, { useState } from "react";
import "./AdminProfile.css";
import { Button, Table } from "react-bootstrap";


const AdminProfile = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const {
        adminName,
        userName,
      
    } = props.adminData;
  
    const handleEditClick = () => {
      setIsEditing(!isEditing);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send data to the server or perform any necessary actions
      setIsEditing(false); // Disable editing after submission
    };
    return (
        <>
            <div className="adminprofile">
            <form onSubmit={handleSubmit}>

            <h3 className="text-center fw-bold text-light mb-4">
            Profile Details
          </h3>
          <Table striped bordered hover>
            <tbody>
            <tr>
                <td><li>
                <label>Admin name</label>
                {isEditing ? (
                  <input
                    value={adminName}
                    type="text"
                    className="form-control"
                    placeholder={adminName.toUpperCase()}
                  />
                ) : (
                  <div>
                    <span>{adminName.toUpperCase()}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>User Name</label>
                {isEditing ? (
                  <input
                    value={userName}
                    type="text"
                    className="form-control"
                    placeholder={userName}
                  />
                ) : (
                  <div>
                    <span>{username.toUpperCase()}</span>
                  </div>
                )}
              </li></td>
              </tr>
            </tbody>
            
            </Table>
            
            <div
            className="d-grid"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="button"
              variant="warning"
              style={{ width: "150px", height: "50px", marginLeft: "30px" }}
              onClick={handleEditClick}
            >
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>


                </form>

            </div>
        </>
    );

     
};

export default AdminProfile;