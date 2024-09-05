const { getPassengerBookingService, provideFeedbackService } = require("../services/passengerService")
const catchFn = require('../utils/catchFn');
const { SuccessResponseHandler } = require("../utils/response");

const provideFeedback = catchFn(async (req, res) => {
    const response = await provideFeedbackService(req.body);
    return SuccessResponseHandler(req, res, 200, response, "Feedback Submitted Successfully");
})


const getPassengerBookings = catchFn(async (req, res) => {
    const response = await getPassengerBookingService(req.params.id);
    return SuccessResponseHandler(req, res, 200, response, "Passanger Data Fetched Successfully")
})


module.exports = {
    provideFeedback,
    getPassengerBookings
}