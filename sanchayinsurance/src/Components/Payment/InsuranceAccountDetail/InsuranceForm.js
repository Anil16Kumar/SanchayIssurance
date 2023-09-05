import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InsuranceForm.css';
import { addPolicytoCustomer } from '../../../services/PolicyService';

function InsuranceForm({data,noOfYear,selectedPlan,maturityDate,
  currDate,calulatedata,investAmount,premiumtype,showPaymentOfPolicyhandle,onSubmit,accessid}) {
    console.log(accessid);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };

    const handleUpload = () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        // Perform the API request to send the file data
        // You can use axios, fetch, or any other library for this step
        // Example: axios.post('/upload', formData)
      } else {
        alert('Please select a file to upload.');
      }
    };
  

  console.log(premiumtype);
  const [formData, setFormData] = useState({
    insuranceType: selectedPlan,
    insuranceScheme: data.schemename,
    numOfYears: noOfYear,
    profitRatio: data.registrationcommission,
    totalInvestmentAmount: investAmount,
    premiumType: premiumtype,
    installmentAmount: calulatedata.installmentAmount,
    totalAmount: calulatedata.totalAmount,
    dateCreated: currDate,
    maturityDate: maturityDate,
    interestAmount:calulatedata.interestAmount
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    

    if (validateForm()) {
      onSubmit(formData);
      console.log('Form data submitted:', formData);
    }
    const premiumt=formData.premiumType;
    const response= await addPolicytoCustomer(accessid,data.schemename,formData,noOfYear,premiumt);

    alert(response)
    // showPaymentOfPolicyhandle();
  };

  return (
    <>
      <h1>Insurance Account Details</h1>
      <div className="form-container">
        <form onSubmit={(handleUpload,handleSubmit)}>
          <div className="form-group">
            <label htmlFor="insuranceType">Plan Name:</label>
            <input
              type="text"
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              disabled
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
              disabled
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
              disabled
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
              disabled
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
              disabled
            />
            <div className="error">{formErrors.totalInvestmentAmount}</div>
          </div>
          <div className="form-group">
            <label htmlFor="premiumType">Premium Type:</label>
            <input
              type="text"
              id="premiumType"
              name="premiumType"
              value={formData.premiumType+" Months"}
              onChange={handleChange}
              disabled
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
              disabled
            />
            <div className="error">{formErrors.installmentAmount}</div>
          </div>

          <div className="form-group">
            <label htmlFor="installmentAmount">Interest Amount:</label>
            <input
              type="number"
              id="interestAmount"
              name="interestAmount"
              value={formData.interestAmount}
              onChange={handleChange}
              disabled
               
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
              disabled
            />
            <div className="error">{formErrors.totalAmount}</div>
          </div>
          <div className="form-group">
            <label htmlFor="dateCreated">Date Created:</label>
            <input
              type="text"
              id="dateCreated"
              name="dateCreated"
              value={formData.dateCreated}
              disabled
            />
            <div className="error">{formErrors.dateCreated}</div>
          </div>
          <div className="form-group">
            <label htmlFor="maturityDate">Maturity Date:</label>
            <input
              type="text"
              id="maturityDate"
              name="maturityDate"
              value={formData.maturityDate}
              disabled
            />
            <div className="error">{formErrors.maturityDate}</div>
          </div>
          <div className="form-group">
          <label htmlFor="documentfile">Upload Document</label>
          <input type="file" accept=".pdf,.doc,.docx,.png,.jpeg,jpg" name="documentfile" onChange={handleFileChange} /> 
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