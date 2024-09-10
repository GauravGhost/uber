const BookingRepository = require('../repositories/bookingRepository');
const { haversineDistance } = require('../utils/distance');
const ApiError = require('../utils/apiError');
const locationRepository = require('../repositories/locationRepository');

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

const findNearByDrivers = async (location, radius = 5) => {
    const longitude = parseFloat(location.logitude);
    const latitude = parseFloat(location.longitude);
    const radiusKm = parseFloat(radius);

    if(isNaN(longitude) || isNaN(latitude) || isNaN(radiusKm)){
        throw new ApiError(400, "Invalid Cordinates or radius");
    }
    const nearByDrivers = await locationRepository.findNearByDrivers(longitude, latitude, radiusKm);
    return nearByDrivers;
}

const confirmBookingService = async (bookingId) => {

}


module.exports = {
    createBookingService,
    confirmBookingService,
    findNearByDrivers
}