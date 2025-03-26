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
  