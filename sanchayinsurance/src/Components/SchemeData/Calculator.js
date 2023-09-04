import React, { useState } from 'react';
import './Calculator.css';
import { Button } from 'react-bootstrap';

const Calculator = ({minamount,maxamount , minyear,maxyear, profitratio, showInsurancePolicyhandle}) => {
  const [noOfYear, setNoOfYear] = useState();
  const [investment, setInvestment] = useState();
  const [month, setMonth] = useState();
  const [interestRate, setInterestRate] = useState(profitratio);

  const [results, setResults] = useState({
    installmentAmount: '',
    interestAmount: '',
    totalAmount: '',
  });

  const [errors, setErrors] = useState({
    noOfYearError: '',
    investmentError: '',
    monthError: '',
  });

  const validateInput = () => {
    const errorsObj = {};

    if (!noOfYear || noOfYear < minyear || noOfYear > maxyear) {
      errorsObj.noOfYearError = 'Number of years must be in the range ';
    }

    const investmentAmount = parseFloat(investment);
    if (!investmentAmount || investmentAmount < minamount || investmentAmount > maxamount) {
      errorsObj.investmentError = 'Total investment amount must be in the range ';
    }

    if (!month) {
      errorsObj.monthError = 'Please select a valid duration.';
    }

    setErrors(errorsObj);

    return Object.keys(errorsObj).length === 0;  
  };

  const calculateInterest = () => {
    const isValid = validateInput();

    if (!isValid) {
      return;  
    }

    const totalMonths = noOfYear * 12;
    const totalNoOfInstallments = totalMonths / month;
    const investmentAmount = parseFloat(investment);

    const installmentAmount = investmentAmount / totalNoOfInstallments;
    const interestAmount = (interestRate / 100) * investmentAmount;
    const netAmount = investmentAmount + interestAmount;

    setResults({
      installmentAmount: installmentAmount.toFixed(2),
      interestAmount: interestAmount.toFixed(2),
      totalAmount: netAmount.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <h1>Interest Calculator</h1>
      <div className="input-container">
        <label>Number of Years:</label>
        <input type="number" value={noOfYear} onChange={(e) => setNoOfYear(e.target.value)} />
        <div className="error" style={{ color: 'red' }}>{errors.noOfYearError}</div>
      </div>
      <div className="input-container">
        <label>Total Investment Amount:</label>
        <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} />
        <div className="error" style={{ color: 'red' }}>{errors.investmentError}</div>
      </div>
      <div className="input-container">
        <label>Months:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">select</option>
          <option value="1">1 Month</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">1 Year</option>
        </select>
        <div className="error" style={{ color: 'red' }}>{errors.monthError}</div>
      </div>
      <div className="input-container">
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <Button onClick={calculateInterest} variant='warning' className='fw-bold' style={{fontSize:'20px'}}>Calculate</Button>
      <table className="results-table">
        <thead>
          <tr>
            <th></th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Installment Amount:</td>
            <td>{results.installmentAmount}</td>
          </tr>
          <tr>
            <td>Interest Amount:</td>
            <td>{results.interestAmount}</td>
          </tr>
          <tr>
            <td>Total Amount:</td>
            <td>{results.totalAmount}</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-3 fw-bold"><Button variant="danger" onClick={showInsurancePolicyhandle}>Submit</Button></div>
    </div>
  );
};

export default Calculator;