const BookingRepository = require("../repositories/bookingRepository");
const ApiError = require("../utils/apiError");
const bookingRepository = new BookingRepository();


const getPassengerBookingService = async (id) => {
    if(!id){
        throw new ApiError(400, "Unauthorized Access!")
    }
    const response = await bookingRepository.getPassengerBookings(id);
    return response;
}


const provideFeedbackService = async (feedbackData) => {
    const bookingId = feedbackData.bookingId;
    delete feedbackData.bookingId;
    const response = await bookingRepository.update(bookingId, feedbackData);
    return response;
}


module.exports = {
    provideFeedbackService,
    getPassengerBookingService
}