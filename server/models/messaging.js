const bookshelf = require('../bookshelf');

const Message = bookshelf.model('Message', {
  tableName: 'messages',
  user: function () {
    return this.belongsTo('User');
  },
});

module.exports = Message;