import axios from "axios";
import { useState } from 'react';

export const addPolicytoCustomer = async (accessid,schemename,formData,noOfYear,premiumt) => {  
  
  console.log(typeof noOfYear);
  const totalinstall=+premiumt * +noOfYear;
  let premium;

  if(+premiumt===12){
    premium="TWELWE_MONTHS";
  }
  else if(+premiumt===3){
    premium="THREE_MONTHS";
  }
  else if(+premiumt===6){
    premium="SIX_MONTHS";
  }

  const response = await axios.post(
    `http://localhost:8080/policyapp/addpolicyScheme/${accessid}/${schemename}`,
    {
        "issuedate": formData.dateCreated,
        "maturitydate": formData.maturityDate,
        "premiumtype": premium,
        "premiumamount": formData.installmentAmount,
        "numberofinstallment":totalinstall,
        "status":"PENDING" 
    },
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  return response.data;
};