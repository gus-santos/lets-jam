const bookshelf = require('../bookshelf');

const Post = bookshelf.model('Post', {
  tableName: 'posts',
  user: function () {
    return this.belongsTo('User');
  }
});

module.exports = Post;