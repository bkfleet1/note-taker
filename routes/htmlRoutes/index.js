const express = require('express');
const router = express.Router();
const path = require('path');

// API ROUTES FOR SITE PAGES
router.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, '../../public/notes.html'));
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    // res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;