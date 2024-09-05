const { getPassengerBookingService, provideFeedbackService } = require("../services/passengerService")


const provideFeedback = async (req, res) => {
    try {
        const response = await provideFeedbackService(req.body);
        return res.status(200).json({ data: response, success: true, error: null, message: "Feedback Submitted Successfully" })
    } catch (error) {
        return res.status(200).json({ data: null, success: false, error: error, message: "Error submitting feedback Failed" })
    }
}


const getPassengerBookings = async (req, res) => {
    try {
        const response = await getPassengerBookingService(req.params.id);
        return res.status(200).json({ data: response, success: true, error: null, message: "Data Fetched Successfully" })
    } catch (error) {
        return res.status(200).json({ data: null, success: false, error: error, message: "Data Fetch Failed" })
    }
}


module.exports = {
    provideFeedback,
    getPassengerBookings
}