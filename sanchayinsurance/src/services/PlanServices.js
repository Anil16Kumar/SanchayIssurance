import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './PlanServices.css'
import { getSchemesByPlanname } from './SchemesService';
import SharedTable from '../sharedComponents/SharedTable';
import { Table } from 'react-bootstrap';
const PlanServices = ({selectedPlan}) => {
const[planSchemes,setPlanScheme]=useState()

  const fetchdata=async ()=>{
    try {
      let response= await getSchemesByPlanname(selectedPlan);
      setPlanScheme(response);
    } catch (error) {
      console.log(error);
    } 
  }
  
  const columns = ['schemename', 'minage', 'maxage','minamount','maxamount','mininvesttime','maxinvesttime','registrationcommission'];
  useEffect(()=>{
    fetchdata();
  },[selectedPlan])  
  return(
      <>
        <div className='planservices'>
          {
            planSchemes &&
            <SharedTable data={planSchemes} columns={columns}/>
          }
        </div>
      </>
    );  
  
  
}

export default PlanServices