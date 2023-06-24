const router = require('express').Router();
const notesRoutes = require('./apiRoute/noteRoutes')

router.use(notesRoutes);

module.exports = router;