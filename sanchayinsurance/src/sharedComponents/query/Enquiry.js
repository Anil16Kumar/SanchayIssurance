import React, { useState } from 'react'

import './Enquiry.css'

const Enquiry = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [query, setQuery] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data={
            
    }
    // Send the submitted data to the parent component via the onSubmit prop
    onSubmit({ title, query });
    // Clear the input fields after submission
    setTitle('');
    setQuery('');
  };

  return (
    <div className="query-form">
      <h2 className="text-dark">Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
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
          <label className="text-dark" htmlFor="query">Query:</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Enquiry