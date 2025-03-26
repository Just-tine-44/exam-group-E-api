const express = require('express');
const router = express.Router();

const groupName = 'E';

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "student"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "student"
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "professor"
  }
];

router.get('/exam-group', (req, res) => {
  res.json({ message: `Group ${groupName} API` });
});

router.get('/exams', (req, res) => {
  res.json(users);
});

module.exports = router;