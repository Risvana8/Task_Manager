const express = require('express');
const path = require('path');

const app = express();
const viewPath = path.join(__dirname, '../templates/views');

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');
app.set('views', viewPath);

app.get('/reg', function (req, res) {
    res.render('reg');
})
  
app.get('/', function (req, res) {
  res.render('login');
})

app.get('/users', function (req, res) {
  res.render('users');
})

app.get('/tasks', function (req, res) {
  res.render('tasks');
})

app.get('/users/add', function (req, res) {
  res.render('add_users');
})

app.listen(3000, function() {
    console.log("Server is upon port 3000");
})
