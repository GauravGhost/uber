const { registerService, loginService } = require("../services/authService");
const { SuccessResponseHandler } = require("../utils/response");
const catchFn = require('../utils/catchFn')
/**
 * Asynchronous function to handle user registration.
 * 
 * @param {Request} req - The request object containing user data in the body.
 * @param {Response} res - The response object to send back the registration status.
 * @returns {Object} The response object with status and data or error message.
 * @throws {Object} The error object if register process fails.
 */
const register = catchFn(async (req, res) => {
    const response = await registerService(req.body);
    return SuccessResponseHandler(req, res, 200, response);
})

/**
 * Asynchronous function to handle user login.
 * 
 * @param {Request} req - The request object containing user login data.
 * @param {Response} res - The response object to send back the result.
 * @returns {Object} The response object with status and data.
 * @throws {Object} The error object if login process fails.
 */
const login = catchFn(async (req, res) => {
    const response = await loginService(req.body);
    return res.status(200).json({ status: "success", data: response, error: {} });
})

module.exports = {
    register,
    login
}