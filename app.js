const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const examRoutes = require('./routes/exam');

// Use routes
app.use('/', examRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;