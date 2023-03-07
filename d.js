// marks: 10%
// install knexjs. 
// initialize a knexfile, setup the development environment with pg as the client and exam_1 as the database. (the questions don't actually require a db connection but knex needs to know pg is the client so the queries are created correctly)
// create export a knex client in ./db/client.js
// Read about the toString method. http://knexjs.org/#Interfaces-toString
// Using knex write a query that selects all columns from the record with `id` of 0 in a table called "students"
// Make sure you invoke the .toString() method after building the query to get back the SQL string.
// Make sure the function returns the SQL string.

const knex = require('./db/client'); // you will need to create this file

function d() {
  // your knex query here
}

d()
module.exports = d;
