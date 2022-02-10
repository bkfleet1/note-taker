const express = require('express');
const router = express.Router();


// location of the routes
router.use(require('./noteRoutes'));

module.exports = router;