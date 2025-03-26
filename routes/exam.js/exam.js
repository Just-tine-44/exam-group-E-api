const express = require('express');
const router = express.Router();

const groupName = 'E';

router.get('/exam-group', (req, res) => {
  res.json({ message: `Group ${groupName} API` });
});

module.exports = router;