const { Comment } = require('../models');

const comments = [{
        "text": "That all depends on how well you can teach yourself and what your resources are. I'd recommend giving it a shot on your own first so that you know what you're getting into either wat. It's also imperative to have a good support network!",
        "post_id": 3,
        "user_id": 4
    },
    {
        "text": "Hey! have you tried Meetup.com? It's a good place to get info on that sort of thing.",
        "post_id": 2,
        "user_id": 6
    },
    {
        "text": "Breathe through frustration, breathe out the urge to bash you head into a wall.",
        "post_id": 1,
        "user_id": 3
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;