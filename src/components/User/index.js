import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const User = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    fathers_name: '',
    class_and_department: '',
    dob: '',
    caste: '',
    blood_group: '',
    email: '',
    phone_number: '',
    local_address: '',
    permanent_address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="user-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="user-heading">User Registration</h2>

        <div className="input-container">
          <label className="label-input">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Father's Name</label>
          <input
            type="text"
            name="fathers_name"
            value={formData.fathers_name}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Class & Department</label>
          <input
            type="text"
            name="class_and_department"
            value={formData.class_and_department}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Caste</label>
          <input
            type="text"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Blood Group</label>
          <input
            type="text"
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Local Address</label>
          <input
            type="text"
            name="local_address"
            value={formData.local_address}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="label-input">Permanent Address</label>
          <input
            type="text"
            name="permanent_address"
            value={formData.permanent_address}
            onChange={handleChange}
            className="user-input"
            required
          />
        </div>

        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default User;
