// Create web server

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load comments.json file
const commentsPath = path.resolve(__dirname, 'comments.json');
let comments = [];
if (fs.existsSync(commentsPath)) {
  comments = JSON.parse(fs.readFileSync(commentsPath, 'utf-8'));
}

// Create a route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that creates a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
  res.json(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that creates a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
  res.json(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that creates a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
  res.json(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that creates a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
  res.json(newComment);
});