const bookingService = require('../services/bookingService')
const locationRepository = require('../repositories/locationRepository');
const catchFn = require('../utils/catchFn');
const { SuccessResponseHandler } = require('../utils/response');

const createBooking = catchFn((io) => async (req, res) => {
    const { source, destination } = req.body;
    const userId = req.user._id;
    const response = bookingService.createBookingService({ passengerId: userId, source, destination });
    return SuccessResponseHandler(req, res, 201, response);
});


const confirmBooking = catchFn((io) => async (req, res) => {

});


module.exports = {
    createBooking,
    confirmBooking
}