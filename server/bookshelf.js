const knex = require('knex')(require('./knexfile'));
const bookshelf = require('bookshelf')(knex);

exports.knex;
module.exports = bookshelf;