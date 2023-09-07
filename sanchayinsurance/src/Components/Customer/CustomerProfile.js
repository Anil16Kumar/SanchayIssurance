import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';

const AdminProfile = ({ adminData }) => {
  const adminId = localStorage.getItem('adminId');

  const [formData, setFormData] = useState(adminData);
  const [formChanges, setFormChanges] = useState(false);

  useEffect(() => {
    const isFormChanged = !Object.keys(formData).every(
      (key) => adminData[key] === formData[key]
    );
    setFormChanges(isFormChanged);
  }, [formData, adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/adminapp/update/${adminId}`, {
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
    <Container style={{ maxWidth: '100%', marginTop: '100px' }}>
      <h2 className="text-center">Admin Profile</h2>
      <Form className="border border-primary rounded p-4">
        <Row>
          <Col md={6}>
            <Form.Group controlId="adminname">
              <Form.Label>Admin Name:</Form.Label>
              <Form.Control
                type="text"
                name="adminname"
                value={formData.adminname}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
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

export default AdminProfile;
