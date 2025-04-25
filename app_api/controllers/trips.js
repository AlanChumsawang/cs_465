const Trip = require('../../app_server/database/model/travlr'); // Correct path to the Trip model

// GET: /trips
const getAllTrips = async (req, res) => {
    try {
        console.log('Fetching trips from the database...');
        const trips = await Trip.find({});
        console.log('Trips fetched:', trips);
        if (!trips || trips.length === 0) {
            console.log('No trips found.');
            return res.status(404).json({ message: "Trips not found" });
        }
        console.log('Returning trips to the client.');
        return res.status(200).json(trips);
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ error: err.message });
    }
};

const getTripByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });
        if (!trip) {
            return res.status(404).json({ message: "That trip was not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        console.error('Error fetching trip:', err);
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllTrips,
    getTripByCode
};