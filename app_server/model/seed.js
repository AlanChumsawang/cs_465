const mongoose = require('mongoose');
const Trip = require('./travlr'); // Import the trips model
const tripsData = require('../data/trips.json'); // Load seed data

const dbURI = process.env.DB_HOST || 'mongodb://127.0.0.1/travlr';

// Connect to the database
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        return Trip.deleteMany(); // Clear the trips collection
    })
    .then(() => {
        console.log('Existing trips data cleared');
        return Trip.insertMany(tripsData); // Insert seed data
    })
    .then(() => {
        console.log('Seed data successfully inserted');
        mongoose.connection.close(); // Close the connection
    })
    .catch(err => {
        console.error('Error seeding data:', err);
        mongoose.connection.close();
    });