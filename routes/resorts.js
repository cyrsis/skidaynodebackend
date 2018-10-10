var express = require('express');
var router = express.Router();

var resortsjson = require("../resort-names")


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(resortsjson);
});

module.exports = router;
