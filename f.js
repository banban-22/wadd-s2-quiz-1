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
  return (
    knex
      // .select('hosts.id', 'hosts.host_url', 'hosts.host_since', 'listings.name')
      // .from('hosts')
      // .innerJoin('listings')
      // .on('hosts.id', '=', 'listings.host_id')
      .select('host.id', 'host.host_url', 'host.host_since', 'listings.name')
      .from('hosts')
      .innerJoin('listings', 'host.id', '=', 'listings.host_id')
      .toString()
  );
}

module.exports = f;
