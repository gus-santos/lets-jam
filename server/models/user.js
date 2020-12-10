const bookshelf = require('../bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  posts: function () {
    return this.hasMany('Post');
  }/* [TBC],
  messages: function () {
    return this.hasMany('Message');
  },
  instruments: function () {
    return this.hasMany('Instrument');
  }*/
});

module.exports = User;