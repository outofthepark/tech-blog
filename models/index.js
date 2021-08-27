const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

User.hasMany(Post);

Post.belongsTo(User);

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

Vote.belongsTo(User);

Vote.belongsTo(Post);

User.hasMany(Vote);

Post.hasMany(Vote, { onDelete: 'cascade' });

Comment.belongsTo(User);

Comment.belongsTo(Post);

User.hasMany(Comment);

Post.hasMany(Comment, { onDelete: 'cascade' });


module.exports = { User, Post, Vote, Comment };
