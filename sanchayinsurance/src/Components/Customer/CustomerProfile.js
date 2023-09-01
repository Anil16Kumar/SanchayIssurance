import React, { useState } from "react";
import "./CustomerProfile.css";
import { Button, Table } from "react-bootstrap";

const CustomerProfile = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    firstname,
    lastname,
    email,
    address,
    state,
    city,
    pincode,
    mobileno,
    nominee,
    nomineerelation,
    birthdate,
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
      <div className="customerprofile">
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
                <label>Address</label>
                {isEditing ? (
                  <input
                    value={address}
                    type="text"
                    className="form-control"
                    placeholder={address}
                  />
                ) : (
                  <div>
                    <span>{address}</span>
                  </div>
                )}
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>City</label>
                {isEditing ? (
                  <input
                    value={city}
                    type="text"
                    className="form-control"
                    placeholder={city}
                  />
                ) : (
                  <div>
                    <span>{city}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>State</label>
                {isEditing ? (
                  <input
                    value={state}
                    type="text"
                    className="form-control"
                    placeholder={state}
                  />
                ) : (
                  <div>
                    <span>{state}</span>
                  </div>
                )}
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>Pincode</label>
                {isEditing ? (
                  <input
                    value={pincode}
                    type="text"
                    className="form-control"
                    placeholder={pincode}
                  />
                ) : (
                  <div>
                    <span>{pincode}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>Mobile No</label>
                {isEditing ? (
                  <input
                    value={pincode}
                    type="text"
                    className="form-control"
                    placeholder={mobileno}
                  />
                ) : (
                  <div>
                    <span>{mobileno}</span>
                  </div>
                )}
              </li></td>
              </tr>
              <tr>
                <td> <li>
                <label>Nominee</label>
                {isEditing ? (
                  <input
                    value={nominee}
                    type="text"
                    className="form-control"
                    placeholder={nominee}
                  />
                ) : (
                  <div>
                    <span>{nominee}</span>
                  </div>
                )}
              </li></td>
                <td><li>
                <label>Nominee Relation</label>
                {isEditing ? (
                  <input
                    value={nomineerelation}
                    type="text"
                    className="form-control"
                    placeholder={nomineerelation}
                  />
                ) : (
                  <div>
                    <span>{nomineerelation}</span>
                  </div>
                )}
              </li></td>
              </tr>
              <tr >
                <td colspan="2"><li>
                <label>Birthdate</label>
                {isEditing ? (
                  <input
                    value={birthdate}
                    type="text"
                    className="form-control"
                    placeholder={birthdate}
                  />
                ) : (
                  <div>
                    <span>{birthdate}</span>
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
    // {/* <div className='customerprofile'>
    //   <h2>Customer Profile</h2>
    //   <p>
    //     <strong>Name:</strong> {firstname.toUpperCase()}
    //   </p>
    //   <p>
    //     <strong>Name:</strong>{lastname.toUpperCase()}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {email}
    //   </p>
    //   <p>
    //     <strong>Address:</strong> {address}
    //   </p>
    //   <p>
    //     <strong>City:</strong> {city}
    //   </p>
    //   <p>
    //     <strong>State:</strong>  {state}
    //   </p>
    //   <p>
    //     <strong>PinCode:</strong> {pincode}
    //   </p>
    //   <p>
    //     <strong>Mobile No:</strong> {mobileno}
    //   </p>
    //   <p>
    //     <strong>Nominee:</strong> {nominee}
    //   </p>
    //   <p>
    //     <strong>Nominee Relation:</strong> {nomineerelation}
    //   </p>
    //   <p>
    //     <strong>Birthdate:</strong> {birthdate}
    //   </p>
    // </div> */}
  );
};

export default CustomerProfile;
