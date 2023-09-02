import React, { useState } from "react";
import "./EmployeeProfile.css";
import { Button, Table } from "react-bootstrap";

const EmployeeProfile = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    firstname,
    lastname,
    email,
    username,
  } = props.customerData;

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
    <div className="employeeprofile">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center fw-bold text-light mb-4">
            Profile Details
          </h3>
          <Table striped bordered hover>
          <tbody>
          <tr>
                <td><li>
                <label>First name</label>
                {isEditing ? (
                  <input
                    value={firstname}
                    type="text"
                    className="form-control"
                    placeholder={firstname.toUpperCase()}
                  />
                ) : (
                  <div>
                    <span>{firstname.toUpperCase()}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    value={lastname}
                    type="text"
                    className="form-control"
                    placeholder={lastname}
                  />
                ) : (
                  <div>
                    <span>{lastname.toUpperCase()}</span>
                  </div>
                )}
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>Email</label>
                {isEditing ? (
                  <input
                    value={lastname}
                    type="text"
                    className="form-control"
                    placeholder={email}
                  />
                ) : (
                  <div>
                    <span>{email}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>User  Name</label>
                {isEditing ? (
                  <input
                    value={username}
                    type="text"
                    className="form-control"
                    placeholder={username}
                  />
                ) : (
                  <div>
                    <span>{username}</span>
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

export default EmployeeProfile;