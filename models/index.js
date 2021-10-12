const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.hasOne(Post, {
    foreignKey: 'post_id'
});

Comment.hasOne(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };