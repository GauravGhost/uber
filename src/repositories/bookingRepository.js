const CrudRepository = require('./crudRepository')
const Booking = require('../models/booking')
class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking)
    }
    async getPassengerBookings(id) {
        try {
            const response = await Booking.find({ passenger: id });
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = BookingRepository;