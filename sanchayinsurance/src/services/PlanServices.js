import axios from 'axios';
import React, { useState } from 'react'
import './PlanServices.css'

const PlanServices = ({selectedPlan}) => {
  const[planData,setPlanData]=useState('');  

  // let plans = async () => {
  //   let res = await axios.get(
  //     `http://localhost:8080/planapp/getall`
  //   );
    
  //   setPlanData(res.data);
  //   // console.log(bankdetail);
  //   // console.log(bankdetail[0].bankid);
  // };
  if(selectedPlan==null){
    return(
      <>
        <div className='planservices'>Schemes all</div>
      </>
    )
  }
  else{
    return(
      <>
        <div className='planservices'>Schemes all here {selectedPlan}</div>
      </>
    );  
  }
  
}

export default PlanServices