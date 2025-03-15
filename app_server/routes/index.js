var express = require('express');
var router = express.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.mainController);

module.exports = router;