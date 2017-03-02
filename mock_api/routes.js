var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/', function (req, res) {
    res.json({
        message: 'mock api is up!'
    });
});

/**
 * Common
 */
router.get('/auth/user', function (req, res) {
    res.json(require('./common/user.json'));
});


/**
 * Employees
 */
router.get('/employees', function (req, res) {
    res.json(require('./employees/employees.json'));
});



module.exports = router;
