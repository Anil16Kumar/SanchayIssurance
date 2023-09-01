import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthenticateAgent } from '../../services/Authenticateuser';

const AgentDashboard = () => {

  const navigation = useNavigate();

  const authenticateuser=async ()=>{
    let isAgent=await AuthenticateAgent();
    if(!isAgent){
      navigation("/")
    }
  }

  useEffect(()=>{
    authenticateuser();
  },[])

  return (
    <div>AgentDashboard</div>
  )
}

export default AgentDashboard