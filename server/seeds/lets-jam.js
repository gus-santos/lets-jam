const messageData = require('../seed_data/messages');
const userData = require('../seed_data/users');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(userData);
    })
    .then(() => {
      return knex('messages').del();
    })
    .then(() => {
      // Inserts seed entries
      return knex('users')
        .pluck('id')
        .then((userIds) => {
          return userIds;
        });
    })
    .then((userIds) => {
      const messageDataWithUserIds = messageData.map((message) => {
        message.user_id =
          userIds[Math.floor(Math.random() * userIds.length)];
        return message;
      });
      return knex('messages').insert(messageDataWithUserIds);
    });
};