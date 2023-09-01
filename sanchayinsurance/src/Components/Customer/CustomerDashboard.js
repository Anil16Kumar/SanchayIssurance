import React, { useEffect } from 'react'
import { AuthenticateCustomer } from '../../services/Authenticateuser';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let isCustomer=await AuthenticateCustomer();
    if(!isCustomer){
      navigation("/")
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])

  
  return (
    <div>CustomerDashboard</div>
  )
}

export default CustomerDashboard