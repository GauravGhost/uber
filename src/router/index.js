const express = require('express');
const bookingRoutes = require('./bookingRoutes');
const authRoutes = require('./authRoutes')
const driverRoutes = require('./driverRoutes')
const passengerRoutes = require('./passengerRoutes')

const router = express.Router();


module.exports = (io) => {
    router.use('/bookings', bookingRoutes(io));
    router.use('/auth', authRoutes);
    router.use('/drivers', driverRoutes);
    router.use('/passengers', passengerRoutes);

    return router;
};