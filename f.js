// marks 10%
// use knex to write to write the following SQL query for this mock db:
//
// Tables:
//
// listings
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |host_id     |foreign key |
// |name        |string      |
// |-------------------------|
//
// hosts
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |host_url    |string      |
// |host_since  |date        |
// |-------------------------|
//
// reviews
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |listing_id  |foreign key |
// |user_id     |foreign key |
// |-------------------------|
//
// users
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |user_name   |string      |
// |friend_id   |foreign key |
// |-------------------------|
//
// get the hosts and the name of their listsings
//

const knex = require('./db/client');

function f() {
  // write knex query here. Rememger to call toString()
}

module.exports = f;
