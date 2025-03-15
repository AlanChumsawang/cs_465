const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.homeController);
router.get('/about', mainController.aboutController);
router.get('/contact', mainController.contactController);
router.get('/meals', mainController.mealsController);
router.get('/news', mainController.newsController);
router.get('/rooms', mainController.roomsController);
router.get('/travel', mainController.travelController);

module.exports = router;