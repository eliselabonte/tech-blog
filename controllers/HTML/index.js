const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const authRoutes = require('./authRoutes');

router.use('/', homeRoutes);
router.use('/login', authRoutes);

module.exports = router;