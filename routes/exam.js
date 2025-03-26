const express = require('express');
const router = express.Router();

const groupName = 'E';

// Middleware to parse JSON body requests
router.use(express.json());

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

// POST /exams endpoint - adds a new exam
router.post('/exams', (req, res) => {
  const { title, date, duration, location } = req.body;
  
  if (!title || !date) {
    return res.status(400).json({ error: "Title and date are required" });
  }
  
  const newExam = {
    id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1, // Using users array since that's what's in the file
    title,
    date,
    duration: duration || 60, 
    location: location || "TBD" 
  };

  if (!global.exams) {
    global.exams = [];
  }
  global.exams.push(newExam);
  
  res.status(201).json(newExam);
});

// PUT /exams/:id endpoint - updates an exam by ID
router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const { title, date, duration, location } = req.body;
  
  if (!global.exams) {
    global.exams = [];
  }
  
  const examIndex = global.exams.findIndex(exam => exam.id === examId);
  
  if (examIndex === -1) {
    return res.status(404).json({ error: `Exam with id ${examId} not found` });
  }
  
  const updatedExam = {
    ...global.exams[examIndex],
    title: title || global.exams[examIndex].title,
    date: date || global.exams[examIndex].date,
    duration: duration || global.exams[examIndex].duration,
    location: location || global.exams[examIndex].location
  };
  
  global.exams[examIndex] = updatedExam;
  
  res.json(updatedExam);
});

module.exports = router;