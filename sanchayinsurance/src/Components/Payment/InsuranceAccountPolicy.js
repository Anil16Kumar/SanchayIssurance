import React, { useState } from 'react'

const InsuranceAccountPolicy = ({
  data,
  onProceedClick,
}) => {

  const [formData, setFormData] = useState(data);  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProceedClick(formData);
  };


  return (
    <div className="form-container">
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Add more form fields here */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InsuranceAccountPolicy