const express = require("express");
const { confirmBooking, createBooking } = require('../controllers/bookingController')
const router = express.Router();

module.exports = (io) => {
    router.post('/', createBooking(io));
    router.post('/confirm', confirmBooking(io));
    
    return router;
}