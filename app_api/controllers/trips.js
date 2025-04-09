const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find().exec();

        if (!Array.isArray(trips)) {
            return res.status(500).json({ message: 'data is not an array' });
        }

        if (trips.length === 0) {
            return res.status(404).json({ message: 'No trips found in the database' });
        }

        res.status(200).json(trips);
    } catch (err) {
        console.error('Error fetching trips:', err);
        res.status(500).json({ message: 'Error fetching trips', error: err.message });
    }
};

const tripsFindCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.code }).exec();
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (err) {
        console.error('Error fetching trip:', err);
        res.status(500).json({ message: 'Error fetching trip', error: err.message });
    }
};

module.exports = {
    tripsList,
    tripsFindCode,
};