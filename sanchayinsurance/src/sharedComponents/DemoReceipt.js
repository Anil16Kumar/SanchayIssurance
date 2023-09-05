import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const DemoReceipt = ({data}) => {
    const navigate=useNavigate()

    useEffect(()=>{
        navigate("/receipt", { newdata: data })
    },[])
  return (
    <div>
    
    </div>
  )
}

export default DemoReceipt