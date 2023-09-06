import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './AddPlan.css'
const AddPlan = ({onClose}) => {
  const [planName, setPlanName] = useState('');

  const handleAddPlan = async() => {
    try {
        let response = await axios.post(`http://localhost:8080/planapp/addplan`, {
          planname: planName
        });
  
        Swal.fire('Done', response.data, 'success');
      } catch (error) {
        alert(error.message);
      }
  
      if (planName.trim() === '') {
        alert('Please enter a plan name.'); // You can replace this with more user-friendly validation
        return;
      }
  
      // Clear the input field and close the modal
      setPlanName('');
      onClose();
  };

  return (
    <div className='div-addplan'>
      <div className='fw-bold' style={{fontSize:"22px"}}>Add Plan Here</div>  
      <input
        type="text"
        placeholder="Enter Plan Name"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
        style={{ maxWidth: '200px', marginTop: '10px' }}
      />
      <button onClick={handleAddPlan} style={{ maxWidth: '200px', marginTop: '10px' }}>Add Plan</button>
    </div>
  );
};

export default AddPlan;
