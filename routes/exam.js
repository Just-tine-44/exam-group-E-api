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