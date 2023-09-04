import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InsuranceForm.css';

function InsuranceForm() {
  const [formData, setFormData] = useState({
    insuranceType: '',
    insuranceScheme: '',
    numOfYears: '',
    profitRatio: '',
    totalInvestmentAmount: '',
    premiumType: '',
    installmentAmount: '',
    totalAmount: '',
    dateCreated: null,
    maturityDate: null,
  });

  const [formErrors, setFormErrors] = useState({
    insuranceType: '',
    insuranceScheme: '',
    numOfYears: '',
    profitRatio: '',
    totalInvestmentAmount: '',
    premiumType: '',
    installmentAmount: '',
    totalAmount: '',
    dateCreated: '',
    maturityDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    for (const key in formData) {
      if (formData[key] === '') {
        errors[key] = 'Required';
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <>
      <h1>Insurance Account Details</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="insuranceType">Insurance Type:</label>
            <input
              type="text"
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
            />
            <div className="error">{formErrors.insuranceType}</div>
          </div>
          <div className="form-group">
            <label htmlFor="insuranceScheme">Insurance Scheme:</label>
            <input
              type="text"
              id="insuranceScheme"
              name="insuranceScheme"
              value={formData.insuranceScheme}
              onChange={handleChange}
            />
            <div className="error">{formErrors.insuranceScheme}</div>
          </div>
          <div className="form-group">
            <label htmlFor="numOfYears">No. of Years:</label>
            <input
              type="number"
              id="numOfYears"
              name="numOfYears"
              value={formData.numOfYears}
              onChange={handleChange}
            />
            <div className="error">{formErrors.numOfYears}</div>
          </div>
          <div className="form-group">
            <label htmlFor="profitRatio">Profit Ratio (%):</label>
            <input
              type="number"
              id="profitRatio"
              name="profitRatio"
              value={formData.profitRatio}
              onChange={handleChange}
            />
            <div className="error">{formErrors.profitRatio}</div>
          </div>
          <div className="form-group">
            <label htmlFor="totalInvestmentAmount">Total Investment Amount:</label>
            <input
              type="number"
              id="totalInvestmentAmount"
              name="totalInvestmentAmount"
              value={formData.totalInvestmentAmount}
              onChange={handleChange}
            />
            <div className="error">{formErrors.totalInvestmentAmount}</div>
          </div>
          <div className="form-group">
            <label htmlFor="premiumType">Premium Type:</label>
            <input
              type="text"
              id="premiumType"
              name="premiumType"
              value={formData.premiumType}
              onChange={handleChange}
            />
            <div className="error">{formErrors.premiumType}</div>
          </div>
          <div className="form-group">
            <label htmlFor="installmentAmount">Installment Amount:</label>
            <input
              type="number"
              id="installmentAmount"
              name="installmentAmount"
              value={formData.installmentAmount}
              onChange={handleChange}
            />
            <div className="error">{formErrors.installmentAmount}</div>
          </div>

          <div className="form-group">
            <label htmlFor="installmentAmount">Interest Amount:</label>
            <input
              type="number"
              id="installmentAmount"
              name="installmentAmount"
              value={formData.installmentAmount}
              onChange={handleChange}
            />
            <div className="error">{formErrors.installmentAmount}</div>
          </div>

          <div className="form-group">
            <label htmlFor="totalAmount">Total Amount:</label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
            />
            <div className="error">{formErrors.totalAmount}</div>
          </div>
          <div className="form-group">
            <label htmlFor="dateCreated">Date Created:</label>
            <DatePicker
              selected={formData.dateCreated}
              onChange={(date) => handleDateChange(date, 'dateCreated')}
              dateFormat="dd/MM/yyyy"
              isClearable
            />
            <div className="error">{formErrors.dateCreated}</div>
          </div>
          <div className="form-group">
            <label htmlFor="maturityDate">Maturity Date:</label>
            <DatePicker
              selected={formData.maturityDate}
              onChange={(date) => handleDateChange(date, 'maturityDate')}
              dateFormat="dd/MM/yyyy"
              isClearable
            />
            <div className="error">{formErrors.maturityDate}</div>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Click Here to Proceed
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InsuranceForm;