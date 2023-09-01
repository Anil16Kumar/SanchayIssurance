import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthenticateEmployee } from '../../services/Authenticateuser';

const EmployeeDashboard = () => {
  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let isEmployee=await AuthenticateEmployee();
    if(!isEmployee){
      navigation("/")
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])



  return (
    <div>EmployeeDashboard</div>
  )
}

export default EmployeeDashboard