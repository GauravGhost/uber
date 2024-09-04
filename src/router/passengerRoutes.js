const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

module.exports = (io) => {
    router.get('/bookings', authMiddleware, getpassengerBookings);
    router.post('/feedback', authMiddleware, proviceFeedback);

    return router;
}

