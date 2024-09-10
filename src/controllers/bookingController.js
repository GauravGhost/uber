const bookingService = require('../services/bookingService')
const locationRepository = require('../repositories/locationRepository');
const catchFn = require('../utils/catchFn');
const { SuccessResponseHandler } = require('../utils/response');

const createBooking = catchFn((io) => async (req, res) => {
    const { source, destination } = req.body;
    const userId = req.user._id;
    const response = bookingService.createBookingService({ passengerId: userId, source, destination });
    const nearByDriver = await bookingService.findNearByDrivers(source);
    for(const driver of nearByDriver){
        // Get Socket id of driver
        
    }
    return SuccessResponseHandler(req, res, 201, response);
});


const confirmBooking = catchFn((io) => async (req, res) => {

});


module.exports = {
    createBooking,
    confirmBooking
}