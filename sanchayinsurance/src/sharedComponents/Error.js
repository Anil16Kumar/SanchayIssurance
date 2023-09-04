import React from "react";
import "./Error.css";
import { BiErrorCircle } from 'react-icons/bi';
import { Button } from "react-bootstrap";
const Error = ({ msg,type }) => {
  return (
    <>
     
<div class="container">
  <div class="alert-box">
    <div class="alert alert-warning">
      <div class="alert-icon text-center">
        <BiErrorCircle/>
      </div>
      <div class="alert-message text-center">
        <strong>{msg}</strong>.
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Error;
