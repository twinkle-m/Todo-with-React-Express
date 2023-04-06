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

Step 3: in /src folder, set environment variables in the .env file

Step 4: If you have changed the port, make sure to change the proxy in the package.json file

The project is now ready to run.


### How to start the project ###

you can run the project by running npm start

This runs an ExpressJS Server at the port specified in .env and a React server at localhost port 3000. Make sure to change the proxy in package.json if you have changed the port in .env

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
