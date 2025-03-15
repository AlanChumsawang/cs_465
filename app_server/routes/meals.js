const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

router.get('/', mealsController.meals);

module.exports = router;