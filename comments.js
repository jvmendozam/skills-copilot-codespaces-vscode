// Create web server

// Import modules
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const commentData = require('./data/comments.json');

// Set up the server
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Respond with the comments data
app.get('/api/comments', (req, res) => {
  res.json(commentData);
});

// Add a new comment
app.post('/api/comments', (req, res) => {
  const newComment = {
    id: Date.now(),
  }
});