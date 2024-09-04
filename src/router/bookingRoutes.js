const express = require("express");

const router = express.Router();

module.exports = (io) => {
    router.post('/', createBooking);
    router.post('/confirm', confirmBooking(io));
    return router;
}