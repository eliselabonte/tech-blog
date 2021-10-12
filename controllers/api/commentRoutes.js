const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async(req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [{ model: User }, { model: Post }]
        });
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [{ model: User }, { model: Post }]
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async(req, res) => {
    try {
        const { text, post_id } = req.body
        const newComment = await Comment.create({ text, post_id, user_id: req.session.user_id });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth, async(req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;