const postData = require('../seed-data/posts');
const userData = require('../seed-data/users');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(userData);
    })
    .then(() => {
      return knex('posts').del();
    })
    .then(() => {
      // Inserts seed entries
      return knex('users')
        .pluck('id')
        .then(authors => {
          return authors;
        });
    })
    .then((authors) => {
      const postDataItem = postData.map((post) => {
        return post;
      });
      return knex('posts').insert(postDataItem);
    });
};