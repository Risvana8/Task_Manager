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

app.listen(3000, function() {
    console.log("Server is upon port 3000");
})
