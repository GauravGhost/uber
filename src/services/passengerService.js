const BookingRepository = require("../repositories/bookingRepository");

const bookingRepository = new BookingRepository();


const getPassengerBookingService = async (id) => {
    const response = await bookingRepository.getPassengerBookings(id);
    if (response.length == 0) {
        throw new Error("Booking has not been made yet!")
    }
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