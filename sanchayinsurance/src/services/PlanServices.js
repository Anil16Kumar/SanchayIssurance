import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './PlanServices.css'
import { getSchemesByPlanname } from './SchemesService';
import SharedTable from '../sharedComponents/SharedTable';
import { Table } from 'react-bootstrap';
import Error from '../sharedComponents/Error';
const PlanServices = ({selectedPlan}) => {

const[planSchemes,setPlanScheme]=useState([])
const[Iserror,setIserror]=useState(false)
const[errorMessage,setErrorMessage]=useState(null)


  let response;
  const fetchdata=async ()=>{
      try {
        response= await getSchemesByPlanname(selectedPlan);
        console.log(response);
        setPlanScheme(response.data)
        setErrorMessage(null)
      } catch (error) {
        console.log(error);
        setErrorMessage(error.response.data)
      }
      
  }



  const columns = ['schemename', 'minage', 'maxage','minamount','maxamount','mininvesttime','maxinvesttime','registrationcommission'];
  useEffect(()=>{
    fetchdata();
  },[selectedPlan])  
  return(
      <>
        <div className='planservices'>
        {errorMessage ? (
         errorMessage && <Error msg={errorMessage}  />
      ) : (
        planSchemes &&<SharedTable data={planSchemes} columns={columns} buttonstatus={true}/>
      )}
      {/* {planSchemes &&<SharedTable data={planSchemes} columns={columns}/>} */}
        </div>                        
      </>
    );                                                                                            
  
  
}

export default PlanServices