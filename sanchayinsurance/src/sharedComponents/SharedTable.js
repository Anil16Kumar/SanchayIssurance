import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ViewPolicyPayment from "../Components/Payment/ViewPolicyPayment";

const SharedTable = ({ data, columns,buttonstatus,handleSelectedScheme ,viewpremiumbutton,setPremiumButton}) => {
const[selectedPolicyData,setSelectedPolicyData]=useState({})
const[viewPolicyPayment,setViewPolicyPayment]=useState(false)
const[viewpolicies,setViewPolicies]=useState(true)


const handleViewPolicy=async (data)=>{
    setViewPolicies(false);
    setSelectedPolicyData(data);
    setViewPolicyPayment(true);
}
  

  return (

    <div>
    {viewpolicies && <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {buttonstatus?(<th className="bg-secondary text-center">Buy Policy</th>):
          (<></>)}
          </tr>
          
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column]}</td>
              ))}
              {viewpremiumbutton?(<td className="bg-secondary"><Button variant="light" value={item['schemename']} onClick={()=>handleViewPolicy(data[rowIndex])}>View Policy</Button></td>):
          ("")}
              {buttonstatus?(<td className="bg-secondary"><Button variant="light" value={item['schemename']} onClick={handleSelectedScheme}>Buy_Policy</Button></td>):
          ("")}
          
            </tr>
          ))}
        </tbody>
      </Table>}

      {viewPolicyPayment && <ViewPolicyPayment policyData={selectedPolicyData}/>}
      
    </div>
  );
};

export default SharedTable;
