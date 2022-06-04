'use strict';
var express = require('express');
var router = express.Router();
var corridor_controller = require('../controllers/corridorController');


/* GET corridor page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   res.send('srikanth');
// });

router.get('/',corridor_controller.create);

router.get('/movement/:floor/:corridor',corridor_controller.movement);

module.exports = router;
