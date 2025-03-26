const express = require('express');
const router = express.Router();

const groupName = 'E';

// Middleware to parse JSON body requests
router.use(express.json());

// Array to store exams
const exams = [
  {
    id: 1,
    title: "Web Development Final",
    date: "2023-12-15",
    duration: 120,
    location: "Room A101"
  },
  {
    id: 2,
    title: "Database Systems",
    date: "2023-12-18",
    duration: 90,
    location: "Room B202"
  }
];

router.get('/exam-group', (req, res) => {
  res.json({ message: `Group ${groupName} API` });
});

router.get('/exams', (req, res) => {
  res.json(exams);
});

router.post('/exams', (req, res) => {
  const { title, date, duration, location } = req.body;
  
  if (!title || !date) {
    return res.status(400).json({ error: "Title and date are required" });
  }
  
  const newExam = {
    id: exams.length > 0 ? Math.max(...exams.map(exam => exam.id)) + 1 : 1,
    title,
    date,
    duration: duration || 60, 
    location: location || "TBD" 
  };
  
  
  exams.push(newExam);
  
  
  res.status(201).json(newExam);
});

module.exports = router;