import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import './ViewPolicyPayment.css'
import axios from "axios";
import Swal from "sweetalert2";

const ViewPolicyPayment = ({ policyData }) => {
  const [installmentsPaid, setInstallmentsPaid] = useState([]);
  
  console.log(policyData, "Policy data");

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handlePayClick = async (premiumData, index) => {
    const currentDate = getFormattedDate();

    try {
      let policynumber = policyData.policynumber;

      let response = await axios.post(`http://localhost:8080/paymentapp/addpayment/${policynumber}`, {
        premiumdate: currentDate,
        amountpaid: premiumData.amount
      });

      Swal.fire(
        'Done',
        response.data,
        'success'
      );

      // Update the installmentsPaid state to mark this installment as paid
      const updatedInstallmentsPaid = [...installmentsPaid];
      updatedInstallmentsPaid[index] = true;
      setInstallmentsPaid(updatedInstallmentsPaid);

    } catch (error) {
      alert(error.message);
    }
  };

  const renderPaymentRows = () => {
    const rows = [];

    for (let i = 1; i <= policyData.numberofinstallment; i++) {
      const premiumDate = new Date(policyData.issuedate);
      premiumDate.setMonth(premiumDate.getMonth() + (i - 1));

      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{policyData.premiumamount}</td>
          <td>{premiumDate.toDateString()}</td>
          <td>
            {installmentsPaid[i - 1] ? (
              "Paid"
            ) : (
              <Button
                variant="primary"
                onClick={() =>
                  handlePayClick(
                    {
                      installment: i,
                      amount: policyData.premiumamount,
                      premiumDate: premiumDate.toISOString()
                    },
                    i - 1 // Index of the installment
                  )
                }
                disabled={installmentsPaid[i - 1]}
              >
                {installmentsPaid[i - 1] ? "Paid" : "Pay"}
              </Button>
            )}
          </td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div>
      <h2>Policy Payment Information</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Installment</th>
            <th>Premium Amount</th>
            <th>Premium Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderPaymentRows()}</tbody>
      </Table>
    </div>
  );
};

export default ViewPolicyPayment;
