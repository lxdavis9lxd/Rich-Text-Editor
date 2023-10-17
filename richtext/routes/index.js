var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rich Text Editor Template using Quill (Open Source)' });
});

// Add a POST route to accept form submissions
router.post('/', function(req, res, next) {
  // Get the submitted data from the request body
  const submittedData = req.body.content;

  // Do something with the submitted data
 console.log("quiLL", submittedData);

  // Redirect the user back to the home page
  res.redirect('/');
});

module.exports = router;
