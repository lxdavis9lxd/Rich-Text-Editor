const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('editor');
    res.render('editor');
});

module.exports = router;
