const userData = require('../seed-data/users');
const messageData = require('../seed-data/messages');

exports.seed = function (knex) {
  // Delete all users
  return knex('users')
    .del()
    .then(function () {
        // Insert user seed entries
        return knex('users').insert(userData);
    })
    .then(() => {
        // Delete messages
        return knex('messages').del();
    })
    .then(() => {
      // Insert seed entries
      return knex('users')
        .pluck('id')
        .then((senders) => {
          return senders;
        });
    })
    .then((senders) => {
      const messageDataWithUserIds = messageData.map((message) => {
        message.id =
          senders[Math.floor(Math.random() * senders.length)];
          console.log(message);
        return message;
      });
      return knex('messages').insert(messageDataWithUserIds);
    });
};