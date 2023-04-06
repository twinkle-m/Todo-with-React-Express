let dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const mysql = require('mysql2');
const axios = require('axios');



app.use(require('body-parser').urlencoded({ extended: false }));
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

// simple query


app.get('/tasks', (req, res) => {
  

  connection.query(
  'SELECT * FROM `tasks`',
  function(err, results, fields) {
    // results contains rows returned by server
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(results))
  }
);
    
  })

app.get('/api/tasks/:id', (req, res) => {
  var id = req.params.id
  
  connection.query(
    'DELETE FROM `tasks` WHERE id= ' + id.toString(),
    function(err, results, fields) {
      res.send("task with id " + id.toString() + " has been deleted")
    }
  );
})

app.post('/api/tasks/', (req, res) => {
 // data = req.body; 

  taskName = req.body.taskName
 
  var sql = "INSERT INTO `tasks` (taskName) VALUES('" + taskName + "');" 


  connection.query(
    sql,
    function(err, results, fields) {
      res.send("task " + taskName + " has been created")
    }
  );
})
app.get('/api/tasks/complete/:id', (req, res) => {
  var id = req.params.id

  var sql = "UPDATE `tasks` SET complete = 1 WHERE id = " + id+ ";"
  console.log(sql)

  connection.query(
    sql,
    function(err, results, fields) {
      res.send("task " + id + " has been completed")
    }
  );
})
app.get('/api/tasks/undo/:id', (req, res) => {
  var id = req.params.id

  var sql = "UPDATE `tasks` SET complete = 0 WHERE id = " + id+ ";"
  console.log(sql)

  connection.query(
    sql,
    function(err, results, fields) {
      res.send("task " + id + " has been undone")
    }
  );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})