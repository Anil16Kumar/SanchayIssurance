import React, { useEffect, useState } from 'react'
import { getPolicyOfCustomer } from '../../services/SchemesService';
import SharedTable from '../../sharedComponents/SharedTable';

import './InsuranceAccount.css'

const InsuranceAccount = ({accessid}) => {
    const[policydata,setPolicyData]=useState([])

    const fetchdata=async ()=>{
      try {
        let response= await getPolicyOfCustomer(accessid);
        setPolicyData(response);
      } catch (error) {
        console.log(error);
      } 
    }
    
    const columns = ['policynumber','issuedate','maturitydate','premiumtype','premiumamount'];
    useEffect(()=>{
      fetchdata();
    },[accessid])  
    return(
        <>
          <div className='policy-div'>
            {
            policydata &&
              <SharedTable data={policydata} columns={columns}/>
            }
          </div>
        </>
      );
}

export default InsuranceAccount