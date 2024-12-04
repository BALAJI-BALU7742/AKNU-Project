const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // For environment variables

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // replace with your MySQL username
  password: process.env.DB_PASSWORD,  // Use environment variable for better security
  database: 'registration_db'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Route to get all registrations (Admin view)
app.get('/admin/registrations', (req, res) => {
  db.query('SELECT * FROM registrations WHERE status = "pending"', (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(result);
  });
});

// Route to approve or reject a registration (Admin approval)
app.post('/admin/approve', (req, res) => {
  const { id, status } = req.body;

  // Update registration status
  db.query('UPDATE registrations SET status = ? WHERE id = ?', [status, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update registration' });
    }

    if (status === 'approved') {
      // Send approval email to user
      db.query('SELECT * FROM registrations WHERE id = ?', [id], (err, userResult) => {
        if (err || !userResult.length) {
          return res.status(500).json({ error: 'User not found' });
        }

        const user = userResult[0];

        // Setup email transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,  // Use environment variable for email
            pass: process.env.EMAIL_PASSWORD  // Use environment variable for email password or app password
          }
        });

        const mailOptions = {
          from: process.env.EMAIL,  // Use environment variable for email
          to: user.email,
          subject: 'Registration Approved',
          text: `Dear ${user.full_name},\n\nYour registration has been approved successfully.\n\nThank you for registering!`
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to send email' });
          }
          res.json({ message: 'Registration approved and email sent' });
        });
      });
    } else {
      res.json({ message: 'Registration status updated' });
    }
  });
});

// Route to submit registration form
app.post('/register', (req, res) => {
  const { full_name, fathers_name, class_and_department, dob, caste, blood_group, email, phone_number, local_address, permanent_address } = req.body;

  const query = `INSERT INTO registrations (full_name, fathers_name, class_and_department, dob, caste, blood_group, email, phone_number, local_address, permanent_address) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [full_name, fathers_name, class_and_department, dob, caste, blood_group, email, phone_number, local_address, permanent_address], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register' });
    }
    res.json({ message: 'Registration successful' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
