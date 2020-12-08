// [Q] Do I actually need this file or can I throw this in with the messaging?
const postData = require("../seed-data/posts");
const userData = require("../seed-data/users");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert(userData);
    })
    .then(() => {
      return knex("posts").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("users")
        .pluck("id")
        .then(userIds => {
          return userIds;
        });
    })
    .then(() => { // [Q] Is this right?
      const postDataItem = postData.map(post => {
        return post;
      });
      return knex("posts").insert(postDataItem);
    });
};