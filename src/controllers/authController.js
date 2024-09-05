const { registerService, loginService } = require("../services/authService")

/**
 * Asynchronous function to handle user registration.
 * 
 * @param {Request} req - The request object containing user data in the body.
 * @param {Response} res - The response object to send back the registration status.
 * @returns {Object} The response object with status and data or error message.
 * @throws {Object} The error object if register process fails.
 */
const register = async (req, res) => {
    try {
        const response = await registerService(req.body);
        return res.status(200).json({ status: "success", data: response });
    } catch (error) {
        return res.status(500).json({ status: "error", data: {}, error: error });
    }
}

/**
 * Asynchronous function to handle user login.
 * 
 * @param {Request} req - The request object containing user login data.
 * @param {Response} res - The response object to send back the result.
 * @returns {Object} The response object with status and data.
 * @throws {Object} The error object if login process fails.
 */
const login = async (req, res) => {
    try {
        const response = await loginService(req.body);
        return res.status(200).json({ status: "success", data: response, error: {} });
    } catch (error) {
        return res.status(500).json({ status: "error", data: {}, error: error });
    }
}

module.exports = {
    register,
    login
}