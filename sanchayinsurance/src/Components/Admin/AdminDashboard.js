import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authenticateadmin } from '../../services/Authenticateuser';

const AdminDashboard = () => {

  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let isAdmin=await Authenticateadmin();
    if(!isAdmin){
      navigation("/")
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])


  return (
    <div>adminDashboard</div>
  )
}

export default AdminDashboard