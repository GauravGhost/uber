const BookingRepository = require('../repositories/bookingRepository');
const { haversineDistance } = require('../utils/distance');
const bookingRepository = new BookingRepository();

const BASIC_FARE = 50;
const RATE_PER_KM = 12;
const createBookingService = async (payload) => {
    const distance = haversineDistance(payload.source, payload.destination);
    const fare = BASIC_FARE + (RATE_PER_KM * distance);

    const bookingData = await bookingRepository.create({
        passenger: payload.passengerId,
        source: payload.source,
        destination: payload.destination,
        fare,
    });
    return bookingData;
}


const confirmBookingService = async (bookingId) => {

}


module.exports = {
    createBookingService,
    confirmBookingService
}