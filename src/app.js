const client = require("./db/connection");
const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const app = express();
const viewPath = path.join(__dirname, '../templates/views');

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'hbs');
app.set('views', viewPath);

//CRUD operation for users:
//API - Application Programming Interface

app.post('/api/users', function(req, res) {
  // console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  let sql = `
    INSERT INTO users(
      name,
      email_id,
      password
    )
    VALUES( 
      $1,
      $2,
      $3
    )
  `;
  let values = [name, email, password];
  client.query(sql, values, function(err, result) {
    if (err) {
      console.log(err);
      res.send("Unable to insert record");
      return;
    }
    res.send("Record inserted successfully");
  })
})

app.get('/reg', function (req, res) {
    res.render('reg');
})
  
app.get('/', function (req, res) {
  res.render('login');
})

app.get('/users', function (req, res) {
  let sql = `
    SELECT 
      *
    FROM
      users
  `;
  client.query(sql, function(err, result) {
    console.log('Users Record =', result.rows);
    res.render('users', {
      title: "USERS",
      users: result.rows
    });
  })
})

app.get('/tasks', function (req, res) {
  let sql = `
    SELECT
	    title,
	    discription,
	    name AS user_name,
      CASE 
        WHEN 
          is_completed = true 
        THEN 
          'Complete'
        ELSE 
          'Incomplete'
      END AS status
    FROM
      tasks
    JOIN
      users
    ON
      tasks.user_id = users.id
  `;
  client.query(sql, function(err, result) {
    console.log(result.rows);
    res.render('tasks', {
      title: "TASKS",
      tasks: result.rows
    });
  })
  
})

app.get('/users/add', function (req, res) {
  res.render('add_users', {
    title: "ADD USERS"
  });
})

app.get('/tasks/add', function (req, res) {
  let sql = `
    SELECT 
      name,
      id
    FROM
      users
  `;
  client.query(sql, function(err, result) {
    console.log(result.rows);
    res.render('add_tasks', {
      title: "ADD TASKS",
      users_name: result.rows
    })
  })
})

app.listen(4000, function() {
    console.log("Server is upon port 4000");
})
