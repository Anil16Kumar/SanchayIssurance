import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import the ReactQuill component
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS
import './Marketing.css';

function MarketingEmail() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image', 'video'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (value) => {
    setMessage(value);
  };

  const handleSendMail = () => {
    if (validateForm()) {
      // Implement your send mail logic here, e.g., using a backend API
      console.log('Sending mail...');
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
    }
  };

  return (
    <div className="marketing-container">
      <h1>Send Mail</h1>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email ID"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-container">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter subject"
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="input-container">
          <label htmlFor="message">Message:</label>
          <ReactQuill
            value={message}
            onChange={handleMessageChange}
            modules={modules}
            formats={formats}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button onClick={handleSendMail}>Send Mail</button>
      </div>
    </div>
  );
}

export default MarketingEmail;