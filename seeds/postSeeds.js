const { Post } = require('../models');

const posts = [{
        "title": "New to this",
        "post_body": "Hi everyone, I'm new to coding and looking for advice. Is there anything that you wish you knew when you began coding? Please email newcoder@gmail.com",
        "user_id": 2
    },
    {
        "title": "Looking for coding meetups",
        "post_body": "Hey! Has anyone heard of a good coding meetup happening in the Santa Cruz area?",
        "user_id": 3
    },
    {
        "title": "Bootcamp",
        "post_body": "Is a coding bootcamp worth it? Or should I just keep my head down and try to teach myself. I really hate the idea of getting into debt.",
        "user_id": 1
    }

];
const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;