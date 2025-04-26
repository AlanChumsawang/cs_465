const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');


router
    .route('/trips')
    .get(tripsController.getAllTrips) //Get Method routes tripList
    .post(tripsController.addTrip) //Post Method Adds a Trip


router
    .route('/trip/:tripCode')
    .get(tripsController.getTripByCode)
    .put(tripsController.updateTrip) //Put Method Updates a Trip;

module.exports = router;