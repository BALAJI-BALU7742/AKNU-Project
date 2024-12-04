import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login
  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Both fields are required!');
      return;
    }

    setLoading(true);

    // Simulate login process (you can integrate actual login logic here)
    setTimeout(() => {
      // Here, we assume the login is successful if username and password are filled.
      setIsLoggedIn(true);
      setLoading(false);
    }, 2000);
  };

  // Fetch registrations after login
  useEffect(() => {
    if (isLoggedIn) {
      const fetchRegistrations = async () => {
        try {
          const response = await axios.get('http://localhost:5000/admin/registrations');
          setRegistrations(response.data);
        } catch (error) {
          console.error('Error fetching registrations:', error);
        }
      };
      fetchRegistrations();
    }
  }, [isLoggedIn]);

  // Handle approval/rejection
  const handleApproval = async (id, status) => {
    try {
      const response = await axios.post('http://localhost:5000/admin/approve', { id, status });
      alert(response.data.message);
      setRegistrations(registrations.filter((reg) => reg.id !== id));
    } catch (error) {
      console.error('Error approving registration:', error);
      alert('Approval failed');
    }
  };

  // If not logged in, show login form
  if (!isLoggedIn) {
    return (
      <div className="admin-container container-fluid">
        <div className="form-content">
          <h1 className="heading">Admin Portal</h1>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label htmlFor="user" className="label-input">Username:</label>
              <input 
                type="text" 
                className="user-input" 
                id="user" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username" 
              />
            </div>
            <div className="input-container">
              <label htmlFor="userPassword" className="label-password">Password:</label>
              <input 
                type="password" 
                className="password-user" 
                id="userPassword" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password" 
              />
            </div>
            <button className="button" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If logged in, show the registrations table
  return (
    <div>
      <h1>Pending Registrations</h1>
      <RegistrationTable registrations={registrations} onApproval={handleApproval} />
    </div>
  );
};

const RegistrationTable = ({ registrations, onApproval }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {registrations.map((reg) => (
        <tr key={reg.id}>
          <td>{reg.full_name}</td>
          <td>{reg.email}</td>
          <td>{reg.status}</td>
          <td>
            <button onClick={() => onApproval(reg.id, 'approved')}>Approve</button>
            <button onClick={() => onApproval(reg.id, 'rejected')}>Reject</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Admin;
