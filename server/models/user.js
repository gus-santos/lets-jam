const bookshelf = require('../bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  messages: function () {
    return this.hasMany('Message');
  },
});

module.exports = User;