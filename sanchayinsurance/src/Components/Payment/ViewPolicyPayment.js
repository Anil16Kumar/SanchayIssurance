import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./ViewPolicyPayment.css";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ViewPolicyPayment = ({ policyData, setPolicyFetch }) => {
  console.log(policyData);
  const [installmentsPaid, setInstallmentsPaid] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Initialize with a default page size
  let paymentlist = policyData.payments.length;
  const[agentcomissionpercentage,setAgentCommissionPercentage]=useState(5)

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handlePayClick = async (premiumData, index) => {
    console.log(premiumData);
    const currentDate = getFormattedDate();
    
  



    try {
      let policynumber = policyData.policynumber;
      let agentid=policyData.agent.agentid;
      // console.log(agentid);
      let agentcommission=  (agentcomissionpercentage*premiumData.amount)/100;
      console.log(typeof agentcommission);
      

      let agentrepose=await axios.post(`http://localhost:8080/agentapp/addcommion/${agentid}/${agentcommission}`)

      let response = await axios.post(
        `http://localhost:8080/paymentapp/addpayment/${policynumber}`,
        {
          premiumdate: currentDate,
          amountpaid: premiumData.amount,
        }
      );

      
      // setPolicyFetch((st) => st + 1);
      const updatedInstallmentsPaid = [...installmentsPaid];
      updatedInstallmentsPaid[index] = true;
      setInstallmentsPaid(updatedInstallmentsPaid);
      Swal.fire(
        '',
        'Payment Done SUccessfully!',
        'success'
      )
    } catch (error) {
      alert(error.message);
    }
  };

  const renderPaymentRows = () => {
    const rows = [];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    for (let i = startIndex + 1; i <= endIndex && i <= policyData.numberofinstallment; i++) {
      const premiumDate = new Date(policyData.issuedate);
      premiumDate.setMonth(premiumDate.getMonth() + (i - 1));

      // Check if the selectedDate matches the premiumDate
      if (
        selectedDate &&
        premiumDate.toDateString() !== selectedDate.toDateString()
      ) {
        continue; // Skip rendering if not matching the selected date
      }

      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{policyData.premiumamount}</td>
          <td>{premiumDate.toDateString()}</td>
          <td>
            {i <= paymentlist ? (
              "Paid"
            ) : (
              <Button
                variant="primary"
                onClick={() =>
                  handlePayClick(
                    {
                      installment: i,
                      amount: policyData.premiumamount,
                      premiumDate: premiumDate.toISOString(),
                    },
                    i - 1
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

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const pageCount = Math.ceil(policyData.numberofinstallment / pageSize);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  // Add page size options
  const pageSizeOptions = [5, 10, 20];

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Policy Payment Information</h2>
      <div className="datepicker-filter">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Filter by Due Date"
          dateFormat="yyyy-MM-dd"
          isClearable
        />
      </div>
      <div className="page-size-dropdown">
        Page Size:
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div style={{ overflowX: "auto" }}>
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
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, i) => (
          <button key={i} onClick={() => changePage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewPolicyPayment;
