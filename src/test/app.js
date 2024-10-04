// app.js
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'John Doe' }]);
});

module.exports = app;
