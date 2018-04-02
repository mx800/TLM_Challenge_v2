var express = require('express');
var router = express.Router();


/* GET Game page. */
router.get('/', function(req, res, next) {
    res.render('konami')
});

module.exports = router;
