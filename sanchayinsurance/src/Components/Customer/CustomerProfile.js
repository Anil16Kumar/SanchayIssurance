import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import Swal from 'sweetalert2';

const CustomerProfile = ({ customerData }) => {
  const customerid = localStorage.getItem('accessid');

  const [formData, setFormData] = useState(customerData);
  const [formChanges, setFormChanges] = useState(false);

  useEffect(() => {
    const isFormChanged = !Object.keys(formData).every(
      (key) => customerData[key] === formData[key]
    );
    setFormChanges(isFormChanged);
  }, [formData, customerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/customerapp/update/${customerid}`, {
        ...formData,
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        setFormChanges(false);
      } 
      else {
        console.error('Profile update failed');
      }
      Swal.fire(
        'Done',
        response.data,
        'Success'
      )
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container style={{ maxWidth: '100%',marginTop:'100px' }}>
      <h2 className="text-center">Customer Profile</h2>
      <Form className="border border-primary rounded p-4">
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstname">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastname">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="state">
              <Form.Label>State:</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="pincode">
              <Form.Label>Pincode:</Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="mobileno">
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control
                type="text"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
  <Col md={6}>
    <Form.Group controlId="birthdate">
      <Form.Label>Birthdate:</Form.Label>
      <DatePicker
        selected={formData.birthdate ? new Date(formData.birthdate) : null}
        onChange={(date) => {
          const formattedDate = date ? date.toISOString().split('T')[0] : '';
          handleChange({ target: { name: 'birthdate', value: formattedDate } });
        }}
        dateFormat="yyyy-MM-dd"
        className="form-control"
      />
    </Form.Group>
  </Col>
</Row>

        <div className="text-center">
          <Button
            variant="primary"
            type="button"
            onClick={handleUpdate}
            disabled={!formChanges}
            className='mt-4'
          >
            Update
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CustomerProfile;
