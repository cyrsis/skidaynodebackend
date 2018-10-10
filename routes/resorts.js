var express = require('express');
var router = express.Router();

var resortsjson = require("../resort-names")


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(resortsjson);
    next
});

router.get('/:name', function(req, res, next) {
    function byName(name) {
        return name.toLowerCase() === resortsjson.substr(0,name.length).toLowerCase()
    }

    res.status(200).json(resortsjson.filter(byName(req.params.name)));
});

module.exports = router;
