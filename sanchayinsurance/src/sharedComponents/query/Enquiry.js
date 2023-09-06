import React, { useState } from 'react'

import './Enquiry.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Enquiry = () => {
  const [title, setTitle] = useState('');
  const [messagequery, setQuery] = useState('');
  const[querydata,setQueryData]=useState({})

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessid=localStorage.getItem("accessid");
    try {
      let response=await axios.post(`http://localhost:8080/queryapp/addquery/${accessid}`,{
        title,
        messagequery,
        replyquery:"",
        status:"Pending"
      });
      setQueryData(response.data);
      

      Swal.fire(
        'Done',
        "Your Query Submitted",
        'Success'
      )

      setTitle("");
      setQuery("")
    } catch (error) {
      alert(error.message);
    }
    setTitle('');
    setQuery('');
  };

  return (
    <div className="query-form">
      <h2 className="text-dark">Customer Feedback</h2>
      <form>
        <div className="form-group">
          <label className="text-dark" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-dark" htmlFor="messagequery">Query:</label>
          <textarea
            id="messagequery"
            value={messagequery}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Enquiry