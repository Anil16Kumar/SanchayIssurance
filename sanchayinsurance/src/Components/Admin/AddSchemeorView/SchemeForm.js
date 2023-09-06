import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './SchemeForm.css'; // Import your CSS file
import Swal from 'sweetalert2';

const SchemeForm = () => {
  const [formData, setFormData] = useState({
    schemename: '',
    description: '',
    minage: '',
    maxage: '',
    minamount: '',
    maxamount: '',
    mininvesttime: '',
    maxinvesttime: '',
    registrationcommission: '',
    planName: '', // Plan name dropdown
  });

  const [planNames, setPlanNames] = useState({});
  
  // Fetch plan names from your API or data source
  useEffect(() => {
    axios.get('http://localhost:8080/planapp/getall')
      .then((response) => {
        setPlanNames(response.data);
      })
      .catch((error) => {
        console.error('Error fetching plan names:', error);
      });
  }, []);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    // Post the form data to your API
    axios.post(`http://localhost:8080/schemeapp/addschemebyplanname?planname=${formData.planName}`, {

    schemename:formData.schemename,
    description:formData.description,
    minage:formData.minage,
    maxage:formData.maxage,
    minamount:formData.minamount,
    maxamount:formData.maxamount,
    mininvesttime:formData.mininvesttime,
    maxinvesttime:formData.maxinvesttime,
    registrationcommission:formData.registrationcommission
    })
      .then((response) => {
        console.log('Form data submitted successfully:', response.data);
        Swal.fire(
            'Done',
            response.data,
            'Success'
          )
        // Reset the form or perform any necessary actions
        setFormData({
          schemename: '',
          description: '',
          minage: '',
          maxage: '',
          minamount: '',
          maxamount: '',
          mininvesttime: '',
          maxinvesttime: '',
          registrationcommission:'',
          planName: '',
        });
      }

      )
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });

     
  };

  let planDropDown
  if(planNames.length>0){
    planDropDown=planNames.map((plan)=>{
        return (
            <option value={plan.planname}>{plan.planname}</option>
        )
    })
  }

  return (


    <div className="scheme-form-container">
      <h2 className='text-center mb-4 fw-bold'>Add Scheme</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="schemename">Scheme Name:</label>
            <input
              type="text"
              id="schemename"
              name="schemename"
              value={formData.schemename}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="planName">Select Plan Name:</label>
            <select
              id="planName"
              name="planName"
            //   value={formData.planName}
              onChange={handleInputChange}
              required
            >
              <option value="" onChange={handleInputChange}>Select a Plan Name</option>
              {planDropDown}
              {/* {planNames.map((planName) => (
                <option key={planName} value={planName}>
                  {planName}
                </option>
              ))} */}
            </select>
          </div>
        </div>
        <div className="form-group" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            style={{ maxWidth: '330px'}}
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="minage">Minimum Age:</label>
            <input
              type="number"
              id="minage"
              name="minage"
              value={formData.minage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxage">Maximum Age:</label>
            <input
              type="number"
              id="maxage"
              name="maxage"
              value={formData.maxage}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="minamount">Minimum Amount:</label>
            <input
              type="number"
              id="minamount"
              name="minamount"
              value={formData.minamount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxamount">Maximum Amount:</label>
            <input
              type="number"
              id="maxamount"
              name="maxamount"
              value={formData.maxamount}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mininvesttime">Minimum Investment Time (in months):</label>
            <input
              type="number"
              id="mininvesttime"
              name="mininvesttime"
              value={formData.mininvesttime}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxinvesttime">Maximum Investment Time (in months):</label>
            <input
              type="number"
              id="maxinvesttime"
              name="maxinvesttime"
              value={formData.maxinvesttime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="registrationcommission">Registration Commission:</label>
          <input
            type="number"
            id="registrationcommission"
            name="registrationcommission"
            value={formData.registrationcommission}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-actions text-center">
          <button type="submit" style={{ maxWidth: '80px', marginTop: '10px', marginLeft: '480px' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SchemeForm;
