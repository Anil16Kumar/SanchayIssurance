import React, { useEffect, useState } from 'react'
import { getPolicyOfCustomer } from '../../services/SchemesService';
import SharedTable from '../../sharedComponents/SharedTable';

import './InsuranceAccount.css'

const InsuranceAccount = ({accessid}) => {
    const[policydata,setPolicyData]=useState([])
    const[showpremium,setPremiumButton]=useState(true)


    useEffect(()=>{
      if(policydata.status==="VERIFIED"){
        setPremiumButton(true);
      }
    },[])

    const fetchdata=async ()=>{
      try {
        let response= await getPolicyOfCustomer(accessid);
        setPolicyData(response);
      } catch (error) {
        console.log(error);
      } 
    }
    
    const columns = ['policynumber','issuedate','maturitydate','premiumtype','premiumamount','status',''];
    useEffect(()=>{
      fetchdata();
    },[accessid])  
    return(
        <>
          <div className='policy-div'>
            {
            policydata &&
              <SharedTable data={policydata} columns={columns} viewpremiumbutton={showpremium}/>
            }
          </div>
        </>
      );
}

export default InsuranceAccount