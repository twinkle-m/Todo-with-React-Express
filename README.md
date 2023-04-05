This is a node todo list built with React GUI, ExpressJS API, and a MySQL Database 




### Project setup ###

Step 1: Create a new MySQL Database
Step 2: Create a new table called `Tasks` in your new DB using the following SQL Query

CREATE TABLE
  `tasks` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `taskName` varchar(255) NOT NULL,
    `complete` tinyint(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

Step 3: in project\src\server.js, set const db_name to your Database name

The project is now ready to run.


### How to start the project ###

Step 1: run node server.js in project\src\ folder. This will start the expressJS server on localhost port 5000

Step 2: run npm start in project folder. This will start the react server on localhost port 3000


### NodeJS API Details ###

1: method GET http://localhost:5000/tasks
Gets task list from DB

2: method GET http://localhost:5000/api/tasks/:id
Deletes task that from DB using the id given

3: method POST http://localhost:5000/api/tasks/
Creates task in the DB
Parameter to send is taskName as url-encoded

4: method GET http://localhost:5000/api/tasks/complete/:id
Sets the task as completed with the given id

5: Method GET http://localhost:5000/api/tasks/undo/:id
Sets the task as incomplete with given id