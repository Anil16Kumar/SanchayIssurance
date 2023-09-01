import React, {useEffect , useState } from "react";
import axios from "axios";
import { getRole } from "./authorization (1)";

const Authenticateuser = () => {
  const[role,setRole]=useState(null);
const Authenticateadmin=()=>{
  // const[role,setRole]=useState(null);
    let token=localStorage.getItem("auth");
    const fetchRole= async ()=>{
      let newRole= await getRole(token);
      setRole(newRole);
    }

    useEffect(()=>{
      if(token==null){
        setRole(null);
        return;
      }
      else{
        fetchRole();
        localStorage.clear();
      }
    },[])
    
    return role==="admin";
    
}
const AuthenticateCustomer=()=>{
  // const[role,setRole]=useState(null);
  let token=localStorage.getItem("auth");
  
  const fetchRole= async ()=>{
    let newRole= await getRole(token);
    setRole(newRole);
  }

  useEffect(()=>{
    if(token==null){
      setRole(null);
      return;
    }
    else{
      fetchRole();
      localStorage.clear();
    }
  },[])
  return role==="customer";
}


const AuthenticateEmployee=()=>{
  // const[role,setRole]=useState(null);
  let token=localStorage.getItem("auth");
  const fetchRole= async ()=>{
    
    let newRole= await getRole(token);
    setRole(newRole);
  }

  useEffect(()=>{
    if(token==null){
      setRole(null);
      return;
    }
    else{
      fetchRole();
      localStorage.clear();
    }
  },[])
  
  return role==="employee";
}

const AuthenticateAgent=()=>{
  // const[role,setRole]=useState(null);
  let token=localStorage.getItem("auth");
  const fetchRole= async ()=>{
    
    let newRole= await getRole(token);
    setRole(newRole);
  }

  useEffect(()=>{
    if(token==null){
      setRole(null);
      return;
    }
    else{
      fetchRole();
      localStorage.clear();
    }
  },[])
  
    return role==="agent";
}

} 

export default Authenticateuser
