import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";
import { Button, Table } from "react-bootstrap";
import { updateCustomer } from "../../services/CustomerService";

const CustomerProfile = ({customerData,onUpdateProfile}) => {
  // const [isEditing, setIsEditing] = useState(false);
  const[formData,setFormData]=useState(customerData);
  let accessid=customerData.customerid;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [firstname, setFirstname] = useState(formData.firstname);
  const [lastname, setLastname] = useState(formData.lastname);
  const [email, setEmail] = useState(formData.email);
  const [address, setAddress] = useState(formData.address);
  const [state, setState] = useState(formData.state);
  const [city, setCity] = useState(formData.city);
  const [pincode, setPincode] = useState(formData.pincode);
  const [mobileno, setMobileno] = useState(formData.mobileno);
  const [birthdate, setBirthdate] = useState(formData.mobileno);
  const [nominee, setNominee] = useState(formData.nominee);
  const [nomineerelation, setNomineerelation] = useState(formData.nomineerelation);
 

  const profileData = {
    firstname: firstname,
    lastname:lastname,
    email:email,
    address:address,
    state:state,
    city: city,
    pincode:pincode,
    mobileno: mobileno,
    birthdate: birthdate,
    nominee: nominee,
    nomineerelation: nomineerelation
   };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // if(profileData){
    //   let response=await updateCustomer(accessid,profileData);
    //   console.log(response);
    // }
    onUpdateProfile(formData);
  };
 
  // const handleInputChange=(e)=>{
  //     e.preventDefault()
  //     setFirstname(e.target);
  // }
  
 


  return (
    <>
      
      <div className="customerprofile">
        <form>
          <h3 className="text-center fw-bold text-light mb-4">
            Profile Details
          </h3>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td><li>
                <label>First name</label>
                
                  <input
                  type="text"
                  id="field1"
                  name="firstname"
                  // value={firstname}
                  placeholder={firstname}
                  onChange={handleInputChange}
                  />
              </li></td>
                <td><li>
                <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder={lastname}
                    onChange={handleInputChange}
                  />
               
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>Email</label>
              
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder={email}
                    onChange={handleInputChange}
                  />
              
              </li></td>
                <td><li>
                <label>Address</label>
                
                  <input
                    
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder={address}
                    onChange={handleInputChange}
                  />
               
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>City</label>
               
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder={city}
                    onChange={handleInputChange}
                  />
                
              </li></td>
                <td><li>
                <label>State</label>
              
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder={state}
                    onChange={handleInputChange}
                  />
              
              </li></td>
              </tr>
              <tr>
                <td><li>
                <label>Pincode</label>
                
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    placeholder={pincode}
                    onChange={handleInputChange}
                  />
                
              </li></td>
                <td><li>
                <label>Mobile No</label>
             
                  <input
                    type="text"
                    name="mobileno"
                    className="form-control"
                    placeholder={mobileno}
                    onChange={handleInputChange}
                  />
               
              </li></td>
              </tr>
              <tr>
                <td> <li>
                <label>Nominee</label>
               
                  <input
                    type="text"
                    name="nominee"
                    className="form-control"
                    placeholder={nominee}
                    onChange={handleInputChange}
                  />
                
              </li></td>
                <td><li>
                <label>Nominee Relation</label>
                
                  <input
                    type="text"
                    name="nomineerelation"
                    className="form-control"
                    placeholder={nomineerelation}
                    onChange={handleInputChange}
                  />
               
              </li></td>
              </tr>
              <tr >
                <td colspan="2"><li>
                <label>Birthdate</label>
                
                  <input
                    type="text"
                    name="birthdate"
                    className="form-control"
                    placeholder={birthdate}
                    onChange={handleInputChange}
                  />
              
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
              onClick={handleSubmit}>
              Update
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
